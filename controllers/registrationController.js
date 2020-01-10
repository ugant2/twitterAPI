var user = require("../models/UserModel.js");


function registerUser(req,res,next){
            if(req.body.phone){
                user.create({
                    username:req.body.username,
                    phone:req.body.phone,
                    password:req.body.password,
                    profileImage:req.body.profileImage,
                    bio:req.body.bio,
                    interest:req.body.interest
                })
                .then(function(result){
                res.json({
                    status:201,
                    messsage:"User is Registered"
                });
                })
                .catch(function(err){
                    next(err);
                });
            }
            if(req.body.email){

            }
       
}

module.exports={
    registerUser
}