var DaoHelper = require("./DaoHelper")

var FriendDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

FriendDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/friends/_view/friendsALL", callbacks);
};
FriendDAO.prototype.findByProfileId = function(id, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/friends/_view/friendsByProfile?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

FriendDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

FriendDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

FriendDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

FriendDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = FriendDAO;
module.exports = exports.default;

