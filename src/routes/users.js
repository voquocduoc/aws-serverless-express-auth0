const UserController = require('./../controllers/UserController');

module.exports = (router) => {
    router.route('/users/:id').get(UserController.getUsers);
    router.route('/users/create').post(UserController.createUser);
}