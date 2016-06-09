var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var preferenceDAO = dm.getDao(CouchDbApi.PreferenceDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML += "<br>" + JSON.stringify(data)+ "<br><br>";
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};
testAppDiv.innerHTML += "<p>findAll: </p><br>";
preferenceDAO.findAll(callbacks);

testAppDiv.innerHTML += "<p>findByProfileId: ca5c2c9fb2d201991f8b6f06e62186d1</p><br>";
preferenceDAO.findByProfileId("ca5c2c9fb2d201991f8b6f06e62186d1",callbacks );

