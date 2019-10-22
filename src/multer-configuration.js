const multer = require('multer');
const utils = require('./utils/files-utils');
const config = require('./config');

function getMulterConfiguration() {
    const filesConfig = config.multer;

    const multerConfig = {
        storage: multer.memoryStorage(),
        limits: filesConfig.limits,
        fileFilter: (req, file, cb) => {
            const isFileTypeAllowed = utils.isFileTypeAllowed(
                file.mimetype,
                filesConfig.allowedFileTypes
            );
            const error = isFileTypeAllowed ? null : new Error('File unsupported mimetype');
            cb(error, isFileTypeAllowed);
        }
    };

    return multer(multerConfig).fields(filesConfig.fields);
}

module.exports.getMulterConfiguration = getMulterConfiguration;
