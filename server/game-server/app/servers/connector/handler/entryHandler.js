var consts = require('../../../consts/consts');
var Token = require('../../../util/token');
var secret = require('../../../../config/session').secret;
require('../../../base/CBaseHandler');


Class({
	ClassName:"CPomelo.Handler.CEntryHandler",
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
	return new CPomelo.Handler.CEntryHandler(app);
};

