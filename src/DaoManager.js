var DaoManager = function(connectionProperties) {
    this._daos = {};
    this.connection = {
        protocol: "https",
        user: "",
        password: "",
        url: "", // Mandatory
        port: "",
        database: "" // Mandatory
    };
    this.connection.getFullUrl = function() {
        var result = "";

        result += this.protocol ? this.protocol + "://" : "https://";
        result += this.user ? this.user : "";
        result += this.user && this.password ? ":" + this.password : "";
        result += this.user ? "@" : "";
        result += this.url;
        result += this.port ? ":" + this.port : "";
        result += "/" + this.database + "/";

        return result;
    };

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
        if (connectionProperties.database) {
            this.connection.database = connectionProperties.database;
        } else {
            console.error("No database given!");
        }
    } else {
        console.error("No connection properties given!");
    }
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
