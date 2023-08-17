var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
    name : {
   type : String
    },
    email :{
        type : String
    },
    mobile_no :{
        type : String
    },
    dob :{
        type : String
    },
    work_exp:{
        type : String
    },
    resume_title:{
        type : String
    },
    current_location :{
        type : String
    },
    postal_address:{
        type : String
    },
    current_employer :{
        type : String
    },
    current_designation:{
        type : String
    }
});
module.exports = mongoose.model('User' , userSchema);