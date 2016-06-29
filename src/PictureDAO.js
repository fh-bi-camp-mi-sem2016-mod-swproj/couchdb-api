var q = require("q");

var DaoHelper = require("./DaoHelper")

var PictureDAO = function(connection) {
    this.connection = connection;
    this.daoHelper = new DaoHelper();
};

PictureDAO.prototype.findAll = function(callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picALL", callbacks);
};

PictureDAO.prototype.findById = function(id, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picALL?key=[%22" + encodeURI(id) + "%22]", callbacks);
};

PictureDAO.prototype.findByProfile = function(profile, callbacks) {
    return this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picForProfile?key=[%22" + encodeURI(profile) + "%22]", callbacks);
};

PictureDAO.prototype.findAttachmentURLsByProfile = function(profile, callbacks) {
    var self = this;

    var defer = q.defer();

    this.daoHelper.find(this.connection.getFullUrl() + "_design/picture/_view/picForProfile?key=[%22" + encodeURI(profile) + "%22]", callbacks)
        .then(function(data) {
            var urls = [];

            for (var i = 0; i < data.length; i++) {
                for (var attachment in data[i]._attachments) {
                    urls.push(self.connection.getFullUrl() + data[i]._id + "/" + attachment);
                }
            }

            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(urls);
            }

            defer.resolve(urls);
        })
        .catch(function(err) {
            if (callbacks && typeof callbacks.error) {
                callbacks.error(err);
            }

            defer.reject(err);
        });

    return defer.promise;
};

PictureDAO.prototype.create = function(obj, callbacks) {
    return this.daoHelper.create(obj, this.connection.getFullUrl(), callbacks);
};

PictureDAO.prototype.update = function(obj, callbacks) {
    return this.daoHelper.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
};

PictureDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        return this.update(obj, this.connection.getFullUrl() + obj._id, callbacks);
    } else {
        return this.create(obj, this.connection.getFullUrl(), callbacks);
    }
};

PictureDAO.prototype.delete = function(obj, callbacks) {
    return this.daoHelper.delete(obj, this.connection.getFullUrl() + obj._id + "?rev=" + encodeURI(obj._rev), callbacks);
};

exports.default = PictureDAO;
module.exports = exports.default;

