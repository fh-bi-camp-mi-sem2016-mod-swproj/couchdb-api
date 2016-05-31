import UserDAO from "./UserDAO";

var DaoHandler = function() {};

DaoHandler.prototype.getUserDao = function() {
    if (!this.userDao) {
        this.userDao = new UserDAO();
    }

    return this.userDao;
};

exports.default = DaoHandler;
module.exports = exports.default;
