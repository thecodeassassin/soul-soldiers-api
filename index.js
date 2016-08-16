const restify = require('restify'),
      restifyValidation = require('node-restify-validation'),
      server = restify.createServer(),
      config = require("./config"),
      errors = require("restify-errors"),
      models = require("./models");

server.use(restify.queryParser());
server.use(restifyValidation.validationPlugin( {
    // Shows errors as an array
    errorsAsArray: false,
    // Not exclude incoming variables not specified in validator rules
    forbidUndefinedVariables: false,
    errorHandler: restify.errors.InvalidArgumentError
}));

var controllers = require('require-all')({
  dirname     :  __dirname + '/controllers',
  recursive   : true,
   resolve     : function (Controller) {
    return new Controller(server, models, config, errors);
  }
});

// set the application routes
// restifyRoutes.set(server, __dirname + '/routes');

server.listen(config.web.port, function() {
  console.log('%s listening at %s', server.name, server.url);
});