var DaoManager = function() {};

DaoManager.prototype._daos = {};

DaoManager.prototype.getDao = function(dao) {
    if (!this._daos[dao]) {
        this._daos[dao] = new dao();
    }

    return this._daos[dao];
};

exports.default = DaoManager;
module.exports = exports.default;
