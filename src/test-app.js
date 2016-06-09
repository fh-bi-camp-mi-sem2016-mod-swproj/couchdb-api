var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var ProfileDao = dm.getDao(CouchDbApi.ProfileDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML += "<br>" + JSON.stringify(data) + "<br><br>" ;
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};

var preference = {
    gender : "0",
    birthday: "-316656000",
    haircolor:"3",
    eyecolor:"0",
    figure :"1"
}
testAppDiv.innerHTML += "<br> <p>-finde Profile ByUserId: ca5c2c9fb2d201991f8b6f06e62169be</p><br> ";
ProfileDao.findByUserId("ca5c2c9fb2d201991f8b6f06e62169be", callbacks );

testAppDiv.innerHTML += "<br> <p>-finde All:</p><br> ";
 ProfileDao.findAll(callbacks);

 testAppDiv.innerHTML += "<br> <p>-finde Profile ById: ca5c2c9fb2d201991f8b6f06e62186d1</p><br> ";
 ProfileDao.findById("ca5c2c9fb2d201991f8b6f06e62186d1", callbacks);

testAppDiv.innerHTML += "<br> <p>-finde Profile ByEmail : marv@allesdoof.de</p><br> ";
ProfileDao.findByEmail("marv@allesdoof.de", callbacks);

testAppDiv.innerHTML += "<br> <p>-finde Profile ByPreference :[gender=0,birthday=-316656000,haircolor=3,eyecolor=0,figure=1] </p><br> ";
ProfileDao.findByPreference(preference, callbacks);
/* */
