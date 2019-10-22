const config = require('./config');
const { Storage } = require('@google-cloud/storage');

const { bucket, projectId, appCred } = config.gcs;

function connectToBucket() {
    console.log('info', {
        message: `Using [${bucket}] bucket from [${projectId}] project for file uploading/downloading`
    });

    const { client_email, private_key } = JSON.parse(`${appCred}`);


    console.log(client_email, private_key);
    //Create a client
    const storage = new Storage({
        credentials: {
            client_email: client_email,
            private_key: private_key
        },
        projectId: projectId
    });

    //Connect to bucket
    const cBucket = storage.bucket(bucket);
    console.log('info', { message: 'GoogleStorage Service has started' });

    return cBucket;
}

module.exports.connectToBucket = connectToBucket;
