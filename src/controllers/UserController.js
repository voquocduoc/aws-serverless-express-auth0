const userModel = require('../models/users');

module.exports = {
    getUsers: function(req, res) {
        const id = req.params.id;
        if (!id) {
            return res.send('Please input Member key').status(401);
        } else {
            userModel.getUser(id).then((result) => {
                if (result) {
                    return res.send(result).status(200);
                }
            });
        }
    },
    createUser: function(req, res) {
        const { username, password } = req.body;
        if (!username || !password)
            return res.send('Username and Password are required').status(401);
    }
}