var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");
var MessageDAO = require("./MessageDAO");
var PictureDAO = require("./PictureDAO");
var PreferenceDAO = require("./PreferenceDAO");
var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.MessageDAO = MessageDAO;
CouchDbApi.PictureDAO = PictureDAO;
CouchDbApi.DaoManager = DaoManager;
CouchDbApi.PreferenceDAO = PreferenceDAO;

exports.default = CouchDbApi;
module.exports = exports.default;
