var DaoHelper = require("./DaoHelper")

var UserDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

UserDAO.prototype.findAll = function(callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/user/_view/userALL", callbacks);
};

UserDAO.prototype.findById = function(id, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/user/_view/userALL?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

UserDAO.prototype.findByLogin = function(login, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/user/_view/userLogin?key=[%22" + encodeURI(login) + "%22]", callbacks);
};

UserDAO.prototype.create = function(obj, callbacks) {
    return this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

UserDAO.prototype.update = function(obj, callbacks) {
    return this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

UserDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        return this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        return this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

UserDAO.prototype.delete = function(obj, callbacks) {
    return this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = UserDAO;
module.exports = exports.default;

