var DaoHandler = require("./DaoHandler");
var UserDAO = require("./UserDAO");

var HelloWorldDB = function() {};

HelloWorldDB.prototype.sayHelloWorld = function() {
    return "Hello, World!";
};

HelloWorldDB.prototype.sayHello = function(name) {
    return "Hello, " + name + "!";
};

var foobar = function() {};

foobar.HelloWorldDB = HelloWorldDB;
foobar.UserDAO = UserDAO;
foobar.DaoHandler = DaoHandler;

exports.default = foobar;
module.exports = exports.default;

