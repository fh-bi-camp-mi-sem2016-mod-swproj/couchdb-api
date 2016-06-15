var DaoHelper = require("./DaoHelper")

var MessageDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

MessageDAO.prototype.findAll = function(callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALL", callbacks);
};

MessageDAO.prototype.findById = function(id, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALL?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

MessageDAO.prototype.findByTo = function(to, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgTo?key=[%22" + encodeURI(to) + "%22]", callbacks);
};

MessageDAO.prototype.findByFrom = function(from, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgFrom?key=[%22" + encodeURI(from) + "%22]", callbacks);
};

MessageDAO.prototype.create = function(obj, callbacks) {
    return this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

MessageDAO.prototype.update = function(obj, callbacks) {
    return this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

MessageDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        return this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        return this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

MessageDAO.prototype.delete = function(obj, callbacks) {
    return this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = MessageDAO;
module.exports = exports.default;

