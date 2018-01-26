const copy = require('copy');
const config = require('../config');

let some = function(err, files) {
    if (err) throw err;
    // `files` is an array of the files that were copied
};

copy('./node_modules/font-awesome/fonts/*', config.fonts, some);
copy('./fonts/*', config.fonts, some);
copy('./imgs/*', config.imgs, some);