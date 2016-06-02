var DaoManager = function(connectionProperties) {
    this._connectionProperties = connectionProperties;

    this._daos = {};
};

DaoManager.prototype.getDao = function(dao) {
    if (!this._daos[dao]) {
        this._daos[dao] = new dao(this._connectionProperties);
    }

    return this._daos[dao];
};

exports.default = DaoManager;
module.exports = exports.default;
