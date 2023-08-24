var User = require('../models/User');
var csv = require('csvtojson');
const async = require('async');

const importUser = async (req, res) => {
    try {
        const response = await csv().fromFile(req.file.open);

        async.eachSeries(response, async (rowData, callback) => {
            const existingUser = await User.findOne({ email: rowData.email });

            if (existingUser) {
               
                console.log(`User with email ${rowData.email} already exists.`);
             
            } else {
                // If not a duplicate, create a new user
                await User.create({
                    name: rowData.name,
                    email: rowData.email,
                    mobile_no: rowData.mobile_no,
                    dob: rowData.dob,
                    work_exp: rowData.work_exp,
                    resume_title: rowData.resume_title,
                    current_location: rowData.current_location,
                    postal_address: rowData.postal_address,
                    current_employer: rowData.current_employer,
                    current_designation: rowData.current_designation
                });
            }

            callback(); 
        }, (err) => {
            if (err) {
                res.status(400).send({ success: false, msg: err.message });
            } else {
                res.send({ success: true, msg: 'Successfully uploaded data' });
            }
        });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

module.exports = {
    importUser
};
