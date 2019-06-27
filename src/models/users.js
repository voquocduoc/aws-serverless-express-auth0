const helperQuery = require('../helper');
const queryPortal = helperQuery.executePortalQuery;

const getUser = (id) => {
    return new Promise((resolve) => {
        const query = "Select * from UserMembership where MemberKey = " + id;
        queryPortal(query).then((result) => {
            resolve(result);
        });
    });
};

module.exports = {
    getUser
}