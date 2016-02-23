var mongoose = require('mongoose')

var applicantSchema = mongoose.Schema({
    name    : String,
    bio     : String,
    skills  : String,
    years   : Number,
    why     : String,
    

})

module.exports = mongoose.model('Applicant', applicantSchema)

//var applicant = new Applicant({
//    name    :  'Ti',
//    bio     : 'Bio',
//    skills  : 'Skills',
//    years   : 1,
//    why     : 'Because',
//
//});
//applicant.save(funciton(err){
//        if (err) {
//    console.log('Error');
//}
//        else {
//            cosnole.log('applicant added');
//        }
//               });