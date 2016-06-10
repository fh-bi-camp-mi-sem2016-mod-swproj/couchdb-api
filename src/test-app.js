var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var friendDAO = dm.getDao(CouchDbApi.FriendDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML += "<p>"+JSON.stringify(data)+"<p><br>" ;
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};
testAppDiv.innerHTML += "<p>findAll friends: <p><br>";
friendDAO.findAll(callbacks);

testAppDiv.innerHTML += "<p>friend findByProfileId: <p><br>" ;
friendDAO.findByProfileId("ca5c2c9fb2d201991f8b6f06e62186d1",callbacks);

