var DaoHelper = require("./DaoHelper")

var MessageDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

MessageDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALL", callbacks);
};

MessageDAO.prototype.findByTo = function(from, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgFrom?key=[" + encodeURI(from) + "]", callbacks);
};

MessageDAO.prototype.findByFrom = function(to, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgTo?key=[" + encodeURI(to) + "]", callbacks);
};

MessageDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl() + "", callbacks);
};

MessageDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

MessageDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + "", callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl() + obj._id, callbacks);
    }
};

MessageDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

exports.default = MessageDAO;
module.exports = exports.default;
