const crypto= require('crypto');
function genPassword(password){
    var salt=crypto.randomBytes(32).toString('hex');
    var genHash=crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex')
    return{salt:salt,hash:genHash}
}

function validPassword(password,hash,salt){
    var hashVarify=crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex')
    return hash===hashVarify;}
  
    module.exports.validPassword=validPassword;
    module.exports.genPassword=genPassword;