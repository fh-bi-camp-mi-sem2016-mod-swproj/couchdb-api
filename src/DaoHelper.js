var DaoHelper = function() {};

DaoHelper.prototype.find = function(dest, callbacks) {
    $.ajax({
        url: dest,
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

DaoHelper.prototype.create = function(obj, dest, callbacks) {
    $.ajax({
        url: dest,
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

DaoHelper.prototype.update = function(obj, dest, callbacks) {
    $.ajax({
        url: dest,
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

DaoHelper.prototype.delete = function(obj, dest, callbacks) {
    $.ajax({
        url: dest,
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

exports.default = DaoHelper;
module.exports = exports.default;