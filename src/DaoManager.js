var DaoManager = function(connectionProperties) {
    this._connectionProperties = connectionProperties;
};

DaoManager.prototype._daos = {};

DaoManager.prototype.connection = {};

DaoManager.prototype.connection.getFullUrl = function() {
    var result = "";

    result += this.connection.protocol ? this.connection.protocol + "://" : "https://";
    result += this.connection.user ? this.connection.user : "";
    result += this.connection.user && this.connection.password ? ":" + this.connection.password : "";
    result += this.connection.user ? "@" : "";
    result += url;
    result += this.connection.port ? ":" + this.connection.port : "";
    result += "/" + this.connection.database + "/";

    return result;
};

DaoManager.prototype.getDao = function(dao) {
    if (!this._daos[dao]) {
        this._daos[dao] = createDao(dao);
    }

    return this._daos[dao];
};

DaoManager.prototype.createDao = function(dao) {
    return new dao(this._connectionProperties);
};

exports.default = DaoManager;
module.exports = exports.default;
