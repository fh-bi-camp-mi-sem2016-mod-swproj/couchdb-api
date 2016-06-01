var DaoHandler = require("./DaoHandler");
var UserDAO = require("./UserDAO");

var CouchDbApi = function() {};

CouchDbApi.UserDAO = UserDAO;
CouchDbApi.DaoHandler = DaoHandler;

exports.default = CouchDbApi;
module.exports = exports.default;

