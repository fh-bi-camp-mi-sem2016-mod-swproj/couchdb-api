var DaoHelper = require("./DaoHelper")

var MessageDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

MessageDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALL", callbacks);
};

MessageDAO.prototype.findByTo = function(to, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgTo?key=[%22" + encodeURI(to) + "%22]", callbacks);
};

MessageDAO.prototype.findByFrom = function(from, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgFrom?key=[%22" + encodeURI(from) + "%22]", callbacks);
};

MessageDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

MessageDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

MessageDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

MessageDAO.prototype.delete = function(obj, userId, callbacks) {
    var valideOperation = false;
    if(obj.from === userId){
        obj.deletedFrom = true;
        valideOperation = true;
    } else if(obj.to === userId){
        obj.deletedTo = true;
        valideOperation = true;
    } else {
        valideOperation = false;
    }
    if(valideOperation){
        this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    }
};

exports.default = MessageDAO;
module.exports = exports.default;

