const express = require("express");
const router = express.Router();
const passport = require('passport');

const Steps = require('../../models/Step');
const Todos = require('../../models/Todo');
const validateStepInput = require('../../validation/step')

router.get("/test",(req,res) => res.json({
    msg: "This is the steeee step"
}));

//these routes might change later
// router.get('/step/:todo_id', (req, res) => {
//     Steps.find({user: req.params.todo_id})
//         .then(steps => res.json(steps))
//         .catch(err =>
//             res.status(404).json({ notweetsfound: 'No steps found from that todo' }
//         )
//     );
// });

// router.get('/step/:id', (req, res) => {
//     Todos.findById(req.params.id)
//         .then(todo => res.json(todo))
//         .catch(err =>
//             res.status(404).json({ notweetfound: 'No todos found with that ID' })
//         );
// });


    // router.get("/step")
    // .get(function (req, res) {
        
    //     res.json({ test: "this is a step"});   
    // })
    
    // .post(function (req, res) {
    //     res.send('Add a book')
    //   })
   

    router.post('/', //working on
    passport.authenticate('jwt',{ session: false }),
    ( req, res ) => {
        const { errors, isValid } = validateStepInput( req.body );

        if( !isValid ){
            return res.status( 400 ).json( errors );
        }
        
         Todos.findOne({ id: req.body.id}).
         exec(function(err,todo){
             if(err)  return res.json(err)
            //return res.json({ "result":todo.id})
           
           
            const newStep = new Steps({
                    id: req.body.id,
                    title: req.body.title,                   
                    done: req.body.done,  
                    todo: todo.id
                    });

                    newStep.save(
                        function( err){
                            if( err ){
                                if(err.name ===  'MongoError' && err.code === 11000){
                                    return res.json('There was a duplicate key error');
                                }
                            }
                                res.json(newStep)
                        }
                    );        // return res.json({ "result":todo.id})
         })
       
    }   

)

module.exports = router;
