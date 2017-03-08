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
			var uid = tokenInfo.userid;
			var self = this;
			self.app.rpc.db.dbRemote.GetUser(session,uid,function(err,data)
			{
				if(err)
				{
					next(null, {code: consts.LOGIN.LOGIN_TOKEN_ERR});
					return;
				}

				next(null, {user:data});

			});
			return;
		}
		next(null, {code: consts.LOGIN.LOGIN_TOKEN_ERR});
	}
})

module.exports = function(app) {
	return new CPomelo.Handler.CEntryHandler(app);
};

