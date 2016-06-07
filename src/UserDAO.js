var DaoHelper = require("./DaoHelper")

var UserDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

UserDAO.prototype.findByLogin = function(login, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "destinationpathandquery" + login, callbacks);
};

UserDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/types/_view/user", callbacks);
};

UserDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl() + "destinationpath", callbacks);
};

UserDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + "destinationpath", callbacks);
};

UserDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + "destinationpath", callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl() + "destinationpath", callbacks);
    }
};

UserDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + "destinationpath", callbacks);
};

exports.default = UserDAO;
module.exports = exports.default;
