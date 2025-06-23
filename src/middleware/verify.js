function isVerified(req, res, next){
    if(1===1){
        return next()
    }
    else{
        return res.redirect('/')
    }
};

module.exports = isVerified;