// const config = {};

// config.redis = {};
// config.web = {};

// config.mastertoken = 

// if (!config.mastertoken) {
//     throw Error("No mastertoken set in config.js!");
// }

// config.salt = 
// config.redis.uri = ;
// config.web.port = 

const mastertoken =  process.env.SOUL_MASTER_TOKEN;

if (!mastertoken) {
    throw Error("No mastertoken set in config.js!");
}

module.exports = {
    redis: {
        uri: process.env.SOUL_REDIS_URI || 'redis://127.0.0.1:6379'
    },
    salt: process.env.SOUL_PASSWORD_SALT || 'salt123',
    web: {
        port: process.env.SOUL_APPLICATION_PORT || 8080
    },
    mastertoken: process.env.SOUL_MASTER_TOKEN,
    rethinkdb: {
        host:  process.env.SOUL_RETHINKDB_HOST || "localhost",
        port: process.env.SOUL_RETHINKDB_PORT || 28015,
        authKey: process.env.SOUL_RETHINKDB_AUTH_KEY || "",
        db: process.env.SOUL_RETHINKDB_PORT || "test"
    },
};