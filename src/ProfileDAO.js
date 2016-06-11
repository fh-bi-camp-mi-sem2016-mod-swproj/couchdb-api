var DaoHelper = require("./DaoHelper")

var ProfileDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

ProfileDAO.prototype.findById = function(id, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/profileALL?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

ProfileDAO.prototype.findByUserId = function(id, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/profileByUser?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

ProfileDAO.prototype.findAll = function(callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/profileALL", callbacks);
};
ProfileDAO.prototype.findByPreference = function(preference, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/profileByPreference?key=" + "[" + preference.gender + "," + preference.birthday + "," + preference.haircolor + "," + preference.eyecolor + "," + preference.figure + "]", callbacks);
};
ProfileDAO.prototype.findByEmail = function(email, callbacks) {
    this.daoHelper.find(this.connection.getFullUrl() + "_design/profile/_view/profileByEmail?key=[%22" + encodeURI(email) + "%22]", callbacks);
};

ProfileDAO.prototype.create = function(obj, callbacks) {
    this.daoHelper.create(obj, this.connection.getFullUrl() + "", callbacks);
};

ProfileDAO.prototype.update = function(obj, callbacks) {
    this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

ProfileDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, this.connection.getFullUrl() + obj_id, callbacks);
    } else {
        this.create(obj, this.connection.getFullUrl() + "", callbacks);
    }
};

ProfileDAO.prototype.delete = function(obj, callbacks) {
    this.daoHelper.delete(obj, this.connection.getFullUrl() + obj_id, callbacks);
};

exports.default = ProfileDAO;
module.exports = exports.default;

