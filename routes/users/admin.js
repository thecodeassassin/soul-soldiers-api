
var Router = require('restify-router').Router;
var routerInstance = newRouter();

import { User } from '../../models'



routerInstance.post({url: '/user/add', validation: {
  body: {
    username: { isRequired: true },
    password: { isRequired: true },
    email: { isRequired: true, isEmail: true }
  }
}}, function (req, res, next) {
    res.send(req.params);
});


// const routes = {
  
//   '/user/add': { 
//     put: { url: '/user/add', validation: {
//       body: {
//         username: { isRequired: true },
//         password: { isRequired: true },
//         email: { isRequired: true, isEmail: true }
//       }
//     }, (req, res, next) => {
//         res.send(req.body);
//     }
//     }
//   }
  
//   '/user/add': {
//     post: (req, res, cb) => {
        
//       console.log(req.body);
        
//       var newUser = new User({
//           username: req.body.username,
//           password: req.body.password,
//           email: req.body.email
//       });
      
//       newUser.saveAll().then((result) => {
//         res.json({"username":result.username});
//         return cb();    
//       });
      
//     }
//   }
// }

export default routerInstance