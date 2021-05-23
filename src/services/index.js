const uploadImage = require('./upload-image/upload-image.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(uploadImage);
};
