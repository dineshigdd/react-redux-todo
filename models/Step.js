const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StepSchema = new Schema({  
    id:{
        type:String,
        required: true,
        unique:true
    },

    title:{
        type: String,
        required:true
    },
    
    done:{
        type: Boolean,
        required:true
    },

    todo: {
        type: String,
        ref: 'Todo'
    }
});

module.exports = Step = mongoose.model('Step',StepSchema);