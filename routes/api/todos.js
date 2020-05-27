const express = require("express");
const router = express.Router()
const passport = require('passport');

const Todos = require('../../models/Todo');
const validateTodoInput = require('../../validation/todo');

const Steps = require('../../models/Step');
const validateStepInput = require('../../validation/step')

router.get("/test",(req,res) => res.json({
    msg: "This is the todos route"
}));

// router.get("/:id/step",(req,res) => res.json({
//     msg: "This is the todos step"
// }));


//these routes might change later
router.get('/user/:user_id', (req, res) => {
    Todos.find({user: req.params.user_id})
        .then(todos => res.json(todos))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'No tods found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Todos.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No todos found with that ID' })
        );
});


router.post('/', 
            passport.authenticate('jwt',{ session: false }),
            ( req, res ) => {
                const { errors, isValid } = validateTodoInput( req.body );

                if( !isValid ){
                    return res.status( 400 ).json( errors );
                }

                const newTodo = new Todos({
                    id: req.body.id,
                    title: req.body.title,
                    body: req.body.body,
                    done: req.body.done,  
                    user: req.user.id
                });


                newTodo.save(err => {
                    if( err ){
                        if(err.name ===  'MongoError' && err.code === 11000){
                            return res.json('There was a duplicate key error');
                        }
                    }
                    res.json(newTodo)
                })
                   
                // then(todo => res.json(todo));   
                
                
            }   

)


// router.post('/step', //working on
//             // passport.authenticate('jwt',{ session: false }),
//             ( req, res ) => {
//                 const { errors, isValid } = validateStepInput( req.body );

//                 if( !isValid ){
//                     return res.status( 400 ).json( errors );
//                 }
                
//                  console.log(req.Todo.id)
//                 const newStep = new Steps({
//                     id: req.body.id,
//                     title: req.body.title,                   
//                     done: req.body.done,  
//                     todo: req.params.id
//                 });

//                 newStep.save().then(step => res.json(step));
//             }   

// )

module.exports = router;
