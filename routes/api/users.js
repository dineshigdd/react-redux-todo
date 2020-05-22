const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/Users');

router.get("/test",(req,res) => res.json({
    msg: "This is the user route"
}));

router.post('/register', ( req, res ) => {
    // Check to make sure nobody has already registered with a duplicate username
    User.findOne( { handle: req.body.handle })
        .then( user => {
            if( user ){
                return res.status(400)
                .json( { handle : "A user has already registered"})
            }else{
                //otherwise create a new user
                    const newUser = new User({
                        handle: req.body.handle,
                        password: req.body.password
                    });

                    bcrypt.genSalt(10, ( err , salt ) => {
                        bcrypt.hash( newUser.password, salt , ( err , hash) => {
                            if( err ) throw err;
                            newUser.password = hash;
                            newUser.save()
                                    .then( user => res.json(user))
                                    .catch( err => console.log( err ));                       
                        })
                    });
            }
        })
})

module.exports = router;

