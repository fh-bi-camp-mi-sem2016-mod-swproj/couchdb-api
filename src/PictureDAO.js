var DaoHelper = require("./DaoHelper")

var PictureDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

PictureDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picALL", callbacks);
};

PictureDAO.prototype.findById = function(id, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/picALL?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

PictureDAO.prototype.findByProfile = function(profile, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picForProfile?key=[%22" + encodeURI(profile) + "%22]", callbacks);
};

PictureDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

PictureDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

PictureDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

PictureDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = PictureDAO;
module.exports = exports.default;

