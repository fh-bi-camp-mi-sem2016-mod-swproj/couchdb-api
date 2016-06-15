var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML += "<br>" + JSON.stringify(data) + "<br><br>";
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};

var dao = dm.getDao(CouchDbApi.UserDAO);

testAppDiv.innerHTML += "<p>findAll: </p><br>";
dao.findAll(callbacks)
.then(function(data) {
    data.forEach(function(row) {
        testAppDiv.innerHTML += row._id + " => " + row.login + "<br />";
    });
});

