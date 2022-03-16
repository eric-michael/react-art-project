const artController = require("./controllers/art");

/* Art related routes */
exports.test = artController.test

exports.getAllArt = artController.getAllArt

exports.addArt = artController.addArt

exports.searchArt = artController.searchArt
/* End art related routes */