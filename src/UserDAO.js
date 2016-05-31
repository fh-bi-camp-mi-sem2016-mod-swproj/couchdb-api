var UserDAO = function() {};

UserDAO.prototype.findUserByLogin = function(login) {
    if (login === "foobar") {
        return {
            login: "foobar",
            password: "foobarfoobar"
        };
    } else {
        return {};
    }
};

exports.default = UserDAO;
module.exports = exports.default;
