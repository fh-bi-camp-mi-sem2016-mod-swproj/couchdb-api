var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");
var MessageDAO = require("./MessageDAO");
var PictureDAO = require("./PictureDAO");
var FriendDAO = require("./FriendDAO");

var CouchDbApi = function() {};

CouchDbApi.DaoManager = DaoManager;

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.MessageDAO = MessageDAO;
CouchDbApi.PictureDAO = PictureDAO;
CouchDbApi.ProfileDAO = ProfileDAO;
CouchDbApi.FriendDAO = FriendDAO;

exports.default = CouchDbApi;
module.exports = exports.default;

