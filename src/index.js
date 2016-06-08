var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");
var MessageDAO = require("./MessageDAO");

var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.MessageDAO = MessageDAO;
CouchDbApi.DaoManager = DaoManager;

exports.default = CouchDbApi;
module.exports = exports.default;
