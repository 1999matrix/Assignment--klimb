var User = require('../models/User');
var csv = require('csvtojson');


const importUser =async(req , res)=>{

    try {
        var userData = [];
        csv()
        .fromFile(req.file.open)
        .then(async(response)=>{
            // console.log(response);
            for(var x =0 ; x<response.length ; x++){
                 userData.push({
                 name: response[x].name,
                 email: response[x].email,
                 mobile_no : response[x]. mobile_no,
                 dob : response[x].dob,
                 work_exp : response[x].work_exp,
                 resume_title : response[x].resume_title,
                 current_location : response[x].current_location,
                 postal_address : response[x].postal_address,
                 current_employer : response[x].current_employer,
                 urrent_designation : response[x].current_designation
                 });
            }
            await User.insertMany(userData);
        })
        res.send({status : 400 , success : true , msg : 'running'});
    }
    catch (error) {
        res.send({status : 400 , success : true , msg:error.message});
    }
}
module.exports = {
    importUser
}