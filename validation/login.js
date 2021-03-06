const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput( data ){
    let errors = {};

    data.handle = validText( data.handle ) ? data.handle : '';
    data.password = validText( data.password ) ? data.password : '';
 

    if( Validator.isEmpty( data.handle )){
        errors.handle = 'Username is required';
    }

    if( Validator.isEmpty( data.password )){
        errors.handle = 'password is required';
    }

    return {
        errors, 
        isValid: Object.keys( errors ).length === 0
    }
}