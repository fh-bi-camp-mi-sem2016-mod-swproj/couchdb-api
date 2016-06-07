var DaoHelper = function() {};

DaoHelper.prototype.find = function(dest, callbacks) {
    if (fetch) {
        fetch(dest, {
            method: "GET",
            mode: "cors",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(function(response) {
            return response.json();
        }).then(function(jsonResponse) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(jsonResponse);
            }
        }).catch(function(err) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(err);
            }
        });
    } else {
        $.ajax({
            url: dest,
            type: "GET",
            contentType: "application/json"
        }).success(function(data, textStatus, jqXHR) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(JSON.parse(data));
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(errorThrown);
            }
        });
    }
};

DaoHelper.prototype.create = function(obj, dest, callbacks) {
    if (fetch) {
        fetch(dest, {
            /*
             * If POST method doesn't work properly, try PUT method instead as
             * stated here: https://wiki.apache.org/couchdb/HTTP_Document_API#POST
             */
            method: "POST",
            mode: "cors",
            body: JSON.stringify(obj)
        }).then(function(response) {
            return response.json();
        }).then(function(jsonResponse) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(jsonResponse);
            }
        }).catch(function(err) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(err);
            }
        });
    } else {
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
                callbacks.success(JSON.parse(data));
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(errorThrown);
            }
        });
    }
};

DaoHelper.prototype.update = function(obj, dest, callbacks) {
    if (fetch) {
        fetch(dest, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(obj)
        }).then(function(response) {
            return response.json();
        }).then(function(jsonResponse) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(jsonResponse);
            }
        }).catch(function(err) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(err);
            }
        });
    } else {
        $.ajax({
            url: dest,
            type: "PUT",
            contentType: "application/json",
            data: obj
        }).success(function(data, textStatus, jqXHR) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(JSON.parse(data));
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(errorThrown);
            }
        });
    }
};

DaoHelper.prototype.delete = function(obj, dest, callbacks) {
    if (fetch) {
        fetch(dest, {
            method: "DELETE",
            mode: "cors",
            body: JSON.stringify(obj)
        }).then(function(response) {
            return response.json();
        }).then(function(jsonResponse) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(jsonResponse);
            }
        }).catch(function(err) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(err);
            }
        });
    } else {
        $.ajax({
            url: dest,
            type: "DELETE",
            contentType: "application/json",
            data: obj
        }).success(function(data, textStatus, jqXHR) {
            if (callbacks && typeof callbacks.success === "function") {
                callbacks.success(JSON.parse(data));
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            if (callbacks && typeof callbacks.error === "function") {
                callbacks.error(errorThrown);
            }
        });
    }
};

exports.default = DaoHelper;
module.exports = exports.default;