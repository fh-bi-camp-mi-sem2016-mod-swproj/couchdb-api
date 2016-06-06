var UserDAO = function(connection) {
    this.connection = connection;
};

UserDAO.prototype.findByLogin = function(login, callbacks) {
    $.ajax({
        url: this.connection.getFullUrl() + "",
        type: "GET",
        contentType: "application/json"
    }).success(function(data, textStatus, jqXHR) {
        if (callbacks && typeof callbacks.success === "function") {
            callbacks.success(JSON.parse(data), textStatus, jqXHR);
        }
    }).error(function(jqXHR, textStatus, errorThrown) {
        if (callbacks && typeof callbacks.error === "function") {
            callbacks.error(jqXHR, textStatus, errorThrown);
        }
    }).complete(function(jqXHR, textStatus) {
        if (callbacks && typeof callbacks.complete === "function") {
            callbacks.complete(jqXHR, textStatus);
        }
    });
};

UserDAO.prototype.findAll = function(callbacks) {
    $.ajax({
        url: this.connection.getFullUrl() + "_design/types/_view/user",
        type: "GET",
        contentType: "application/json"
    }).success(function(data, textStatus, jqXHR) {
        if (callbacks && typeof callbacks.success === "function") {
            callbacks.success(JSON.parse(data), textStatus, jqXHR);
        }
    }).error(function(jqXHR, textStatus, errorThrown) {
        if (callbacks && typeof callbacks.error === "function") {
            callbacks.error(jqXHR, textStatus, errorThrown);
        }
    }).complete(function(jqXHR, textStatus) {
        if (callbacks && typeof callbacks.complete === "function") {
            callbacks.complete(jqXHR, textStatus);
        }
    });
};

UserDAO.prototype.create = function(obj, callbacks) {
    $.ajax({
        url: this.connection.getFullUrl() + "",
        /*
         * If POST method doesn't work properly, try PUT method instead as
         * stated here: https://wiki.apache.org/couchdb/HTTP_Document_API#POST
         */
        type: "POST",
        contentType: "application/json",
        data: obj
    }).success(function(data, textStatus, jqXHR) {
        if (callbacks && typeof callbacks.success === "function") {
            callbacks.success(JSON.parse(data), textStatus, jqXHR);
        }
    }).error(function(jqXHR, textStatus, errorThrown) {
        if (callbacks && typeof callbacks.error === "function") {
            callbacks.error(jqXHR, textStatus, errorThrown);
        }
    }).complete(function(jqXHR, textStatus) {
        if (callbacks && typeof callbacks.complete === "function") {
            callbacks.complete(jqXHR, textStatus);
        }
    });
};

UserDAO.prototype.update = function(obj, callbacks) {
    $.ajax({
        url: this.connection.getFullUrl() + "",
        type: "PUT",
        contentType: "application/json",
        data: obj
    }).success(function(data, textStatus, jqXHR) {
        if (callbacks && typeof callbacks.success === "function") {
            callbacks.success(JSON.parse(data), textStatus, jqXHR);
        }
    }).error(function(jqXHR, textStatus, errorThrown) {
        if (callbacks && typeof callbacks.error === "function") {
            callbacks.error(jqXHR, textStatus, errorThrown);
        }
    }).complete(function(jqXHR, textStatus) {
        if (callbacks && typeof callbacks.complete === "function") {
            callbacks.complete(jqXHR, textStatus);
        }
    });
};

UserDAO.prototype.createOrUpdate = function(obj, callbacks) {
    if (obj._id) {
        this.update(obj, callbacks);
    } else {
        this.create(obj, callbacks);
    }
};

UserDAO.prototype.delete = function(obj, callbacks) {
    $.ajax({
        url: this.connection.getFullUrl() + "",
        type: "DELETE",
        contentType: "application/json",
        data: obj
    }).success(function(data, textStatus, jqXHR) {
        if (callbacks && typeof callbacks.success === "function") {
            callbacks.success(JSON.parse(data), textStatus, jqXHR);
        }
    }).error(function(jqXHR, textStatus, errorThrown) {
        if (callbacks && typeof callbacks.error === "function") {
            callbacks.error(jqXHR, textStatus, errorThrown);
        }
    }).complete(function(jqXHR, textStatus) {
        if (callbacks && typeof callbacks.complete === "function") {
            callbacks.complete(jqXHR, textStatus);
        }
    });
};

exports.default = UserDAO;
module.exports = exports.default;
