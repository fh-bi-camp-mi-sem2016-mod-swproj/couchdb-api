var CouchDbApi = require("./index");

var connSettings = require("./conn-settings.js");

var dm = new CouchDbApi.DaoManager(connSettings);

var userDao = dm.getDao(CouchDbApi.UserDAO);

var testAppDiv = document.getElementById("test-app");

var callbacks = {
    success: function(data) {
        testAppDiv.innerHTML = JSON.stringify(data);
    },
    error: function(error) {
        testAppDiv.innerHTML = error;
    }
};

userDao.findAll(callbacks);

// var myUser = {
//     _id: "ca5c2c9fb2d201991f8b6f06e62440e0",
//     _rev: "1-72f83619c7de8f9d9517db3ab5e445fb",
//     doctype: "user",
//     login: "carmenelectra",
//     password: "carmenelectra",
//     role: 0
// };
//
// userDao.delete(myUser);
