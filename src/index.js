var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");
var MessageDAO = require("./MessageDAO");
var PictureDAO = require("./PictureDAO");
var FriendDAO = require("./FriendDAO");

var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.MessageDAO = MessageDAO;
CouchDbApi.PictureDAO = PictureDAO;
CouchDbApi.DaoManager = DaoManager;
CouchDbApi.FriendDAO = FriendDAO;

exports.default = CouchDbApi;
module.exports = exports.default;
