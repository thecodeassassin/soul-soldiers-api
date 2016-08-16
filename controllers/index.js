function IndexController(server, models, config, errors) {
    server.get('/hello', (req, res, next) => {
        
        console.log(config.rethinkdb);
        
        var user = models.User({
          'username': 'test',
          'password': 'test',
          'email': 'test@email.com'
        });
        
        user.saveAll().then((result) => {
            
          console.log('fsdfsdf');
          console.log(result);
          res.send(result);
          next();
        });
        
        // console.log();
        // res.send("Hello World!");
        // next();
    });
}

module.exports = IndexController;