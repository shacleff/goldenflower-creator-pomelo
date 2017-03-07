/**
 * Created by Class on 2017/3/7.
 */
var consts = require('../../../consts/consts');
var Token = require('../../../util/token');
var secret = require('../../../../config/session').secret;
require('../../../base/CBaseHandler');


Class({
    ClassName:"CPomelo.Handler.CZJHHandler",
    Base:"CPomelo.Handler.CBaseHandler",
    entry:function(msg, session, next)
    {
        var tokenInfo = Token.parse(msg.token,secret);
        if(tokenInfo)
        {
            next(null, {msg: 'game server is ok.'});
            return;
        }
        next(null, {code: consts.LOGIN.LOGIN_TOKEN_ERR});
    }
})

module.exports = function(app) {
    return new CPomelo.Handler.CZJHHandler(app);
};