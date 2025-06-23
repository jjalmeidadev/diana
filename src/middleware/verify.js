function isVerified(req, res, next){
    if(1===0){
        return next()
    }
    else{
        return res.redirect('/')
    }
};

module.exports = isVerified;