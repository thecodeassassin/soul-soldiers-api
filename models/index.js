// module.exports = (model) => {
//       const thinky = require('./thinky.js'),
//              config = require("../config");
    
//     let activeModel = null;
//     try {
//         activeModel = require("./"+model)(thinky, config);
//     } catch (exception) {
//         console.log(exception);
//     }
    
//     return activeModel;
// };

 const thinky = require('./thinky.js'),
                config = require("../config");
                
module.exports = {
    User: require('./user.js')(thinky, config)
};