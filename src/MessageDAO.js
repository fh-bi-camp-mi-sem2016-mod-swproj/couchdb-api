var DaoHelper = require("./DaoHelper")

var UserDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

UserDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALL", callbacks);
};

UserDAO.prototype.findByTo = function(from, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgFrom?key=[" + encodeURI(from) + "]", callbacks);
};

UserDAO.prototype.findByFrom = function(to, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgTo?key=[" + encodeURI(to) + "]", callbacks);
};

UserDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl() + "", callbacks);
};

UserDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

UserDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + "", callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl() + obj._id, callbacks);
    }
};

UserDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

exports.default = UserDAO;
module.exports = exports.default;
