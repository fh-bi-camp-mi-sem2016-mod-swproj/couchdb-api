var DaoHandler = require("./DaoHandler");
var UserDAO = require("./UserDAO");

var foobar = function() {};

foobar.UserDAO = UserDAO;
foobar.DaoHandler = DaoHandler;

exports.default = foobar;
module.exports = exports.default;

