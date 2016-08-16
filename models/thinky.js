 const config = require("../config"),
       thinky = require('thinky')(config.rethinkdb);

module.exports = thinky;