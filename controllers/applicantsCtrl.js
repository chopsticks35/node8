var Applicant = require('../models/applicants.js')

//create applicants\\
function createApplicant (req, res){

    var applicant = new Applicant({
    name    : req.body.name,
    bio     : req.body.bio,
    skills  : req.body.skills,
    years   : +req.body.years,
    why     : req.body.why,

})
    applicant.save(function(err, savedApplicant){   
//        res.send('Successfully added: ' + savedApplicant)
////        s
        //    //redirect  after submitted \\
    res.redirect('/');
    })
}

//list applicants\\
function getApplicants(req, res){
    Applicant.find({}, function(err, docs){
        res.send(docs)
    })
}

module.exports = {
    createApplicant : createApplicant,
    getApplicants : getApplicants
}