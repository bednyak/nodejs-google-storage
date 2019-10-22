const DefaultAllowedFileTypes = ['image/jpeg', 'image/png'];

function isFileTypeAllowed(fileMimeType, allowedFileTypes) {
    if (allowedFileTypes) {
        return allowedFileTypes.includes(fileMimeType);
    }
    return DefaultAllowedFileTypes.includes(fileMimeType);
}

module.exports.isFileTypeAllowed = isFileTypeAllowed;
