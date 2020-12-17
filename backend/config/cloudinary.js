const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'tweneboah',
  api_key: '986451386744613',
  api_secret: 'GiusV0bSLrMqioANgP3H0j0dAL0',
});

module.exports = { cloudinary };
