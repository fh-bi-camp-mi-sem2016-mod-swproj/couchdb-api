var DaoManager = function(connectionProperties) {
    if (connectionProperties) {
        if (connectionProperties.protocol) {
            this.connection.protocol = connectionProperties.protocol;
        }
        if (connectionProperties.user) {
            this.connection.user = connectionProperties.user;
        }
        if (connectionProperties.password) {
            this.connection.password = connectionProperties.password;
        }
        if (connectionProperties.url) {
            this.connection.url = connectionProperties.url;
        } else {
            console.error("No URL given!")
        }
        if (connectionProperties.port) {
            this.connection.port = connectionProperties.port;
        }
        if (connectionProperties.protocol) {
            this.connection.protocol = connectionProperties.protocol;
        } else {
            console.error("No database given!");
        }
    }
};

DaoManager.prototype._daos = {};

DaoManager.prototype.connection = {
    protocol: "https",
    user: "",
    password: "",
    url: "", // Mandatory
    port: "",
    database: "" // Mandatory
};

DaoManager.prototype.connection.getFullUrl = function() {
    var result = "";

    result += this.connection.protocol ? this.connection.protocol + "://" : "https://";
    result += this.connection.user ? this.connection.user : "";
    result += this.connection.user && this.connection.password ? ":" + this.connection.password : "";
    result += this.connection.user ? "@" : "";
    result += this.connection.url;
    result += this.connection.port ? ":" + this.connection.port : "";
    result += "/" + this.connection.database + "/";

    return result;
};

DaoManager.prototype.getDao = function(dao) {
    if (!this._daos[dao]) {
        this._daos[dao] = this.createDao(dao);
    }

    return this._daos[dao];
};

DaoManager.prototype.createDao = function(dao) {
    return new dao(this.connection);
};

exports.default = DaoManager;
module.exports = exports.default;
