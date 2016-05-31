var HelloWorldDB = function() {};

HelloWorldDB.prototype.sayHelloWorld = function() {
    return "Hello, World!";
};

HelloWorldDB.prototype.sayHello = function(name) {
    return "Hello, " + name + "!";
};

exports.default = HelloWorldDB;
module.exports = exports.default;

