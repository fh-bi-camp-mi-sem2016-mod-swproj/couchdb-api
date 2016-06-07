var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var userDao = dm.getDao(CouchDbApi.UserDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data, textStatus, jqXHR) {
        testAppDiv.innerHTML = JSON.stringify(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        testAppDiv.innerHTML = errorThrown;
    },
    complete: function(jqXHR, textStatus) {}
};

userDao.findAll(callbacks);
