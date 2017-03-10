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
    join:function(msg, session, next)
    {

    },
    ready:function(msg, session, next)
    {

    },
    start:function(msg, session, next)
    {

    }
})

module.exports = function(app) {
    return new CPomelo.Handler.CZJHHandler(app);
};