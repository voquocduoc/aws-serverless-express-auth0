const UserRoutes = require('./users');

module.exports = {
    users: (router) => {
        UserRoutes(router);
    }
}