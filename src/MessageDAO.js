var q = require("q");

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

MessageDAO.prototype.findAvailableFrom = function(userid, callbacks) {

    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALLAvailableFrom?key=[%22" + encodeURI(userid) + "%22]", callbacks);
};
MessageDAO.prototype.findAvailableTo = function(userid, callbacks) {
    
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgALLAvailableTo?key=[%22" + encodeURI(userid) + "%22]", callbacks);
};

MessageDAO.prototype.findUndeleteFrom = function(userid, callbacks) {

    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgAllUndeletedFrom?key=[%22" + encodeURI(userid) + "%22]", callbacks);
};
MessageDAO.prototype.findUndeleteTo = function(userid, callbacks) {

    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgAllUndeletedTo?key=[%22" + encodeURI(userid) + "%22]", callbacks);
};
MessageDAO.prototype.findArchivedFrom = function(userid, callbacks) {

    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgAllArchivedFrom?key=[%22" + encodeURI(userid) + "%22]", callbacks);
};
MessageDAO.prototype.findArchivedTo = function(userid, callbacks) {

    return this.daoHelper.find(this.connection.getFullUrl() + "_design/msg/_view/msgAllArchivedTo?key=[%22" + encodeURI(userid) + "%22]", callbacks);
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

MessageDAO.prototype.delete = function(obj, userId, callbacks) {
    var validOperation = false;

    if (obj.from === userId) {
        obj.deletedFrom = true;
        validOperation = true;
    } else if (obj.to === userId) {
        obj.deletedTo = true;
        validOperation = true;
    }

    if (validOperation) {
        return this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    }

    var defer = q.defer();
    defer.reject("user is not sender or recipient of message");

    return defer.promise;
};

exports.default = MessageDAO;
module.exports = exports.default;

