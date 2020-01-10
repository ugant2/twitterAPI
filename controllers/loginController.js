        var user = require("../models/UserModel.js");

        function loginValidator(req,res,next){
    
            // if(!req.body.username && !req.body.email && !req.body.phone){
            //     res.send("Please enter username/phone/email");
            // }
        
            // if(!req.body.password){
            //     res.send("Password is required");
            // }
            // if(req.body.password === null)
            // {
            //     res.send("Password cannot be empty");
            // }
            if(req.body.phone){
                if(req.body.phone === null)
            {
                res.send("Phone Number cannot be empty");
            }
               
                user.findOne({
                    where:{phone:req.body.phone}
                })
                .then(function(result){
                    if(result===null){
                        res.send("You have not been registered, register first");
                    }
                    else{
                        //console.log(result);
                        req.passwordFromDB=result.dataValues.password;
                        req.user=result.dataValues.username;
                        next();
                    }
                }).catch(function(err){
                    next(err);
                });
            }
             if(req.body.username){
                if(req.body.username === null)
                {
                    res.send("Username cannot be null");
                }
                
                user.findOne({
                    where:{username:req.body.username}
                })
                .then(function(result){
                    if(result===null){
                        res.send("You have not registered, register first");
                    }
                    else{
                        //console.log(result);
                        req.passwordFromDB=result.dataValues.password;
                        req.user=result.dataValues.username;
                        next();
                    }
                }).catch(function(err){
                    next(err);
                });
            }
            if(req.body.email){
                if(req.body.email === null)
                {
                    res.send("Email cannot be empty");
                }
                user.findOne({
                    where:{email:req.body.email}
                })
                .then(function(result){
                    if(result===null){
                        res.send("You have not registered, register first");
                    }
                    else{
                        //console.log(result);
                        req.passwordFromDB=result.dataValues.password;
                        req.user=result.dataValues.username;
                        next();
                    }
                }).catch(function(err){
                    next(err);
                });
            }
           
        }


        function chkLogin(req,res,next){
            if(req.passwordFromDB !==null){
                res.end("User login unsucessfull");
       
        } else{
            res.end("User login sucessfull");
        } }


        
        
      
        function login(req,res,next){
            res.json({
                status:202,
                username:req.user});
        }

        module.exports={
            loginValidator,
            chkLogin,login
        };
        
