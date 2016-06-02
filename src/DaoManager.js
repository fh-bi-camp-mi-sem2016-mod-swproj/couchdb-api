var DaoManager = function(connectionProperties) {
    this._connectionProperties = connectionProperties;
};

DaoManager.prototype._daos = {};

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
