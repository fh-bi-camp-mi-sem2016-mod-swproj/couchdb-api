var UserDAO = require("./UserDAO");

var DaoManager = function() {};

DaoManager.prototype.getUserDao = function() {
    if (!this.userDao) {
        this.userDao = new UserDAO();
    }

    return this.userDao;
};

exports.default = DaoManager;
module.exports = exports.default;
