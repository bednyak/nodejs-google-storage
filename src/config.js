module.exports = {
    root: `${__dirname}/../../../`,
    host: process.env.HOST || 'http://localhost',
    port: process.env.PORT || 4000,
    gcs: {
        appCred:
            '{\n' +
            '  "type": "service_account",\n' +
            '  "project_id": "crypto-galaxy-255212",\n' +
            '  "private_key_id": "2cfcc979f75ce722fdaaf41d6cf227c57345f4b9",\n' +
            '  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfa7s4aK7k0SH+\\n7OVvJrIY6/64ruOgIXS4RzMsq5tpr7J50SCKB8yLhQ9lQP9nVnMyNwlaQLmePIgX\\nzSdWariwcpuaxTOPqqQ8z2o42oF7EjQEcPljnWkMo3s8YRBT8SpbYx7Iuuli/8gM\\nGuUEHKXNVHpd9ZoggnJP8XlKQvAetDAQ4ejaRtR1+kDkUDF+NqyJN0WKjLa+TMzV\\n+KYsaGbLi3A3jo+ssA+nLqVBFAGfOd/xIY5Gnhfess2tYe7eRJMQLPtm0YP1T5/r\\nTOEr32jvhbPktGMW0Iv3W1UhiZCN6fsGQxDOA67gDWc6jN1tbw4XzrQajLrUWREd\\nWiaPSCWXAgMBAAECggEADzzE0EdxL/2tOih6ZX1VWHx2BEDzEMMh3NsxUPu2Bwv8\\nCxip+4dzTYKSTiNARihFKm+IPVAibbVrbJr3P5NDw9mwdcKTgw/UUtugU37PEWxT\\n/Hiv3Y2WFNcrWEIOxXcvjTyUHKuA0y2PeVi4uwPh9RY1+/UVnjXZpzp1VVvAh66a\\np0cnql2E00RP80HELM2TwBjedndIEuQyDzcWUxBjfZhwRH+LflVeqlP5KVRrROAF\\nFKFRluZndTiufAHDurTh1iwz91QdlrUtB624IfJnO5S+QzbtY7SyRew3cRVDkRvt\\n0YGNHB3KQj2+NwYWupbjcggTIJWIWcbG6e/GfhYZwQKBgQDPyfIWTckc1UN6tKTK\\nC2cknuOsPUI9OetwIecLU8N9aumen8Ylq5mHRdZH85ySOcLD3x5HLZ2xeJkHYXQT\\n0p1EkhmnPJJqpMmozWKBpU3WmPG19nORZ/r/VwK6ykVLeCjKHFIln0yRt6jcDlPT\\nHU/Ffu506vODclwmTs3ZTsSuGwKBgQDEaN2Oe0cmblFJ9rXjvz6rpc5DV4S7JRBn\\nWnAxezCTzLDyFf4IqRqUKaf/QHzOKITC81hbXAat2ilRDsedEdcup1ncr0+Sfynw\\ntNpcRRNSVr4XwuJOeCYPoBS0m2gLSCAMujuE8XUjCqPz7ZmU6TsnibFIUEQr98QA\\nB32SU0nuNQKBgQCaf4RiMxobNzMCVLjGhe3+G6obUj0jOyKk8IBTOsf7Q/hK+m+h\\naNMx8qpeO3OqggogC5D+yZsb7xiRlVNyvcIzzxIF+BLB+p76xSO+VAPpUTU/3+yU\\nLCVDoBWmf2lAsSpbBO3LjYOoQU/rtzd6nKvIpBV3l47SqMB9t1B1iIzTCwKBgQC2\\nM4G0t2/dmuEV+CPrznHY0ctydTHQWiXJewAxJtJ9iZlsOjKa3iSl5a7O/4fHx5bB\\nMvV4avpXNNa3Nzq93tr7kIuwSYFLqWPCxEL87adq7sURTdyaZqMIQ7xxfukZ7iKt\\nK+YjActkYm6NzpB2r5YMq5MmPi+/ieztCgXXRCSFMQKBgCjry4XkRu+tlLtqy4oN\\nRaf4nbfqea0Sdle45WbbOR0Kg8E+QFDvRojZI1zMwpmt3gr1FBqLu9gnj78ff+JL\\nl4Z12BqcnHAeV5PdpMf1ev8GMhJZ4ojZzawH+LSOXZpJUBv9c//skZyq3+Yu2enV\\nurfEgpu5GWLE9TQMHmAolmEx\\n-----END PRIVATE KEY-----\\n",\n' +
            '  "client_email": "myserviceaccountname@crypto-galaxy-255212.iam.gserviceaccount.com",\n' +
            '  "client_id": "113705775377891448727",\n' +
            '  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n' +
            '  "token_uri": "https://oauth2.googleapis.com/token",\n' +
            '  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n' +
            '  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/myserviceaccountname%40crypto-galaxy-255212.iam.gserviceaccount.com"\n' +
            '}\n',
        projectId: 'crypto-galaxy-255212',
        bucket: 'my_bucket_xxx'
    },
    multer: {
        limits: {
            fileSize: 10485760
        },
        fields: [{ name: 'avatar', maxCount: 1 }],
        docsPerUpload: 5,
        allowedFileTypes: ['image/jpeg', 'image/png', 'application/pdf']
    }
};
