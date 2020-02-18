import User from '../model/userModel';

// Handle index actions


const Index = function(req, res){
    User.get(function(err, users){
        if(err){
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            status: 200,
            message: "User retrieved successfully",
            data: users
        })
    })
}
const New = function(req, res){
         let user = new User();
         user.name = req.body.name ? req.body.name : user.name;
         user.gender = req.body.gender;
         user.email = req.body.email,
         user.password = req.body.password,
         user.phone = req.body.phone;


         user.save(function(err){
             if(err){
                 res.json(err);
             }else{
                 res.json({
                     message: 'user created successfully',
                     data: user
                    });
                };
            });
        }
        ;

// handle view user informations
const View = function(req, res){
    User.findById(req.params.user_id, function(err, user) {
          if(err){
              res.json(err)
          }else{
              res.json({
                  message: 'user details loading...',
                  data: user
              })
          };
    })
};

const Delete = function (req, res){
    User.remove({ _id: req.params.user_id}, function(err, user){
         if(err){
             res.json(err);
         }else{
             res.json({
                 status: 200,
               message: 'user deleted'
            });
        };
})}

 const Login = function(req, res) {
        const { email, password } = req.body
        const user = User.findByCredentials([email, password]);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        res.send({ user, message: 'login successful' })
}

export{
    New, View, Delete, Index, Login
}

