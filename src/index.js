var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");
var MessageDAO = require("./MessageDAO");
var PictureDAO = require("./PictureDAO");

var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.MessageDAO = MessageDAO;
CouchDbApi.PictureDAO = DaoManager;
CouchDbApi.DaoManager = DaoManager;


exports.default = CouchDbApi;
module.exports = exports.default;
