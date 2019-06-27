const sql = require("mssql");
const configure = require('../config');
const configureDBPortal = configure.dbPortalConfig;

const executePortalQuery = function(query) { 
    return new Promise((resolve) => {
        const result = {
            error: false,
            message: null,
            data: null
        };
        sql.close();
        sql.connect(configureDBPortal, function (err) {
            if (err) {   
                console.log("Error while connecting database :- " + err);
                result.error = true;
                result.message = "Error while connecting database :- " + err;
                resolve(result);
            } else {
                // create Request object
                var request = new sql.Request();
                // query to the database
                request.query(query, function (err, res) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        result.error = true;
                        result.message = "Error while connecting database :- " + err;
                        resolve(result);
                    } else {
                        result.data = res;
                        resolve(result);
                    }
                });
            }
        });
    });         
}

module.exports = {
    executePortalQuery
}