const gcsBucketConnection = require('./google-storage').connectToBucket();
const stream = require('stream');

class FilesController {
    constructor() {
        this.gcsBucket = gcsBucketConnection;
    }

    async downloadFile(fileName) {
        const fileOriginalName = fileName;
        const downloadingStream = this.gcsBucket.file(fileOriginalName).createReadStream();
        const streamData = new stream.PassThrough();
        downloadingStream.pipe(streamData);
        return streamData;
    }

    async uploadFile(files) {
        return await Promise.all(
            files.map(async file => {
                const remoteWritableStream = this.gcsBucket
                    .file(file.originalname)
                    .createWriteStream({
                        metadata: {
                            contentType: file.mimetype
                        }
                    });

                //create local read stream with file content
                const localReadStream = new stream.PassThrough();
                localReadStream.end(file.buffer);

                await new Promise((resolve, reject) => {
                    remoteWritableStream.on('finish', () => {
                        console.log('debug', { message: 'uploading completed' });
                        return resolve();
                    });

                    remoteWritableStream.on('error', e => {
                        console.log('error', { message: 'uploading error', error: e.message });
                        return reject(e);
                    });

                    //pipe read stream to write stream
                    localReadStream.pipe(remoteWritableStream);
                });
                const [[uploadedFile]] = await this.gcsBucket.getFiles({
                    prefix: file.originalname
                });
                const [uploadedFileMetadata] = await uploadedFile.getMetadata();
                return {
                    id: uploadedFileMetadata.id,
                    name: uploadedFileMetadata.name,
                    bucket: uploadedFileMetadata.bucket,
                    timeCreated: uploadedFileMetadata.timeCreated
                };
            })
        );
    }
}

module.exports = new FilesController();
