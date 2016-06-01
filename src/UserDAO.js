var UserDAO = function() {};

UserDAO.prototype.findUserByLogin = function(login) {
    var result = {};

    $.ajax({
        url: "",
        type: "GET",
        async: false
    }).success(function(data) {
        result = JSON.parse(data);
    });

    return result;
};

UserDAO.prototype.findAll = function() {
    var result = [];

    $.ajax({
        url: "",
        type: "GET",
        async: false
    }).success(function(data) {
        result = JSON.parse(data);
    });

    return result;
};

UserDAO.prototype.create = function(obj) {
    var result = {};

    $.ajax({
        url: "",
        type: "POST",
        async: false
    }).success(function(data) {
        result = JSON.parse(data);
    });

    return result;
};

UserDAO.prototype.update = function(obj) {
    var result = {};

    $.ajax({
        url: "",
        type: "PUT",
        async: false
    }).success(function(data) {
        result = JSON.parse(data);
    });

    return result;
};

UserDAO.prototype.createOrUpdate = function(obj) {
    var result = {};

    if (obj._id) {
        result = this.update(obj);
    } else {
        result = this.save(obj);
    }

    return result;
};

UserDAO.prototype.delete = function(obj) {
    $.ajax({
        url: "",
        type: "DELETE",
        async: false
    }).success(function(data) {
    });
};

exports.default = UserDAO;
module.exports = exports.default;
