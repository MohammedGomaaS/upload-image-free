// Initializes the `upload-multiple-competitors` service on path `/upload-multiple-competitors`
const hooks = require('./upload-image.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/public-images');
module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/upload-image',
  blobService({ Model: blobStorage }),
    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    });

  // Get our initialized service so that we can register hooks
  const service = app.service('upload-image');

  service.hooks(hooks);
};
