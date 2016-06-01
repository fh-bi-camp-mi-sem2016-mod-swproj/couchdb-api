var DaoManager = require("./DaoManager");
var UserDAO = require("./UserDAO");

var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.DaoManager = DaoManager;

exports.default = CouchDbApi;
module.exports = exports.default;

