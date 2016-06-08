var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var ProfileDao = dm.getDao(CouchDbApi.ProfileDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML += "<br>" + JSON.stringify(data) ;
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};
testAppDiv.innerHTML += "<br> <p>-finde All:</p><br> ";
ProfileDao.findAll(callbacks);
testAppDiv.innerHTML += "<br> <p>-finde ProfileById: ca5c2c9fb2d201991f8b6f06e62186d1</p><br> ";
ProfileDao.findById("ca5c2c9fb2d201991f8b6f06e62186d1");
testAppDiv.innerHTML += "<br> <p>-finde ProfileByUserId: ca5c2c9fb2d201991f8b6f06e62169be</p><br> ";
ProfileDao.findById("ca5c2c9fb2d201991f8b6f06e62169be");
