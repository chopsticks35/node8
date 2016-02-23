var mongoose = requite('mongoose')

var applicantSchema = mongoose.Schema({
    name        : String,
    bio         : String,
    skills      : String,
    yearsExp    : Number,
    reason      :   String,
    

})

module.exports = mongoose.model('Applicant', applicantSchema)