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
        this.app.rpc.zjh.zjhRemote.join(null,msg.rid,session.uid,session.frontendId ,next)
    },
    ready:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.ready(null,session.uid,msg.r ,next)
    },
    start:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.start(null,session.uid ,next)
    },
    giveup:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.giveup(null,session.uid ,next)
    },
    follow:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.follow(null,msg.p,session.uid ,next)
    },
    see:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.seeCards(null,session.uid ,next)
    },
    open:function(msg, session, next)
    {
        this.app.rpc.zjh.zjhRemote.open(null,session.uid ,next);
    }

})

module.exports = function(app) {
    return new CPomelo.Handler.CZJHHandler(app);
};