
module.exports = (thinky, config) => {
    const uuid = require('node-uuid'),
                 hash = require('node_hash'),
                 type = thinky.type;

    var p = thinky.r.table("authors").count().run((err, result) => {
        console.log(result);    
    });
    

    // Create a model - the table is automatically created
    var User = thinky.createModel("User", {
        id: type.string(),
        username: type.string(),
        password: type.string(),
        email: type.string()
    }); 
    
    User.pre('save', function(next) {
        
        this.password =  hash.sha256(this.password, config.salt);
        
        // if (this.uuid == "") {
        //     this.uuid = uuid.v4();
        // }
        // else {
        //     next();
        // }
        next();
    });
    
    return User;
}
