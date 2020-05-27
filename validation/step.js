
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateStepInput(data){
    let errors = {};
    
 
    data.title = validText( data.title) ? data.title : '';

    if( !Validator.isLength( data.title, { min: 5, max:20})){
        errors.title = 'title must be between 5 and 20 characters';
    }

     if( Validator.isEmpty( data.title ) ){
        errors.title = 'title field is required';
    }

    return{
        errors,
        isValid: Object.keys( errors ).length === 0
    };
    
};