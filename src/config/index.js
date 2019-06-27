const dbPortalConfig = {
    user: process.env.DATABASE_PORTAL_USERNAME ,
    password: process.env.DATABASE_PORTAL_PASSWORD,
    server: process.env.DATABASE_PORTAL_HOST,
    database: process.env.DATABASE_PORTAL_STATEMENT
};

module.exports = {
    dbPortalConfig
}