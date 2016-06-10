var DaoHelper = require("./DaoHelper")

var PreferenceDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

PreferenceDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/preference/_view/preferenceALL", callbacks);
};
PreferenceDAO.prototype.findByProfileId = function(id,callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/preference/_view/preferenceByProfile?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

PreferenceDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

PreferenceDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

PreferenceDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

PreferenceDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = PreferenceDAO;
module.exports = exports.default;

