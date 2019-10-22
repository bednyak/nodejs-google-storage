const express = require('express');
const app = express();
const filesController = require('./files-controller');
const multerConfiguration = require('./multer-configuration');

app.post(
    '/upload',
    (req, res, next) => {
        const multerConfig = multerConfiguration.getMulterConfiguration();
        multerConfig(req, res, err => {
            if (err) {
                return res.status(err.status || 500).json({
                    error: err.message
                });
            }
            next();
        });
    },
    async (req, res, next) => {
        const uploadingResults = await filesController.uploadFile(req.files.avatar);
        res.status(200).json(uploadingResults);
    }
);

app.get('/download', async (req, res, next) => {
    const { fileName } = req.query;
    const downloadingFile = await filesController.downloadFile(fileName);
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Cache-Control': 'public, max-age=86400',
        'Content-Disposition': 'attachment; filename=' + fileName
    });
    downloadingFile.pipe(res);
});

module.exports = app;
