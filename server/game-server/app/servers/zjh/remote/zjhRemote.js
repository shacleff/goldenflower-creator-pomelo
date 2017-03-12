/**
 * Created by Class on 2017/3/7.
 */
var consts = require('../../../consts/consts');
var Token = require('../../../util/token');
var secret = require('../../../../config/session').secret;
require('../../../base/CBaseRemote');
require('../../../gameData/game/zjh/CZJHDataCenter');


Class({
    ClassName:"CPomelo.Remote.CZJHRemote",
    Base:"CPomelo.Remote.CBaseRemote",
    DataCenter:null,
    uid2Roomid:function(uid)
    {
        var p = this.DataCenter.Persons[uid];
        return p?p.RoomId:-1;

    },
    init:function(next)
    {
        next();
        this.DataCenter = Game.Data.CZJHDataCenter.Instance;
    },
    join:function(uid,rid, next)
    {
        var self = this;
        self.app.rpc.db.dbRemote.GetUser(null,uid,function(err,data)
        {
            if(!err)
            {
                var rid = this.DataCenter.intoRoom(uid,rid);
                if(rid>0)
                {
                    var p = this.DataCenter.Persons[uid];
                    p.Data=data;
                    var roomInfo = this.DataCenter.Rooms[rid];
                    next(null, {r: roomInfo});
                    return;
                }
            }

            next(null, {code: consts.LOGIN.LOGIN_TOKEN_ERR});
            return;

        });

    },
    ready:function(uid,ready, next)
    {

        var rid = this.uid2Roomid(uid);
        if(rid>0)
            this.DataCenter.Rooms[rid].ready(uid,ready);
        next();
    },
    start:function(uid, next)
    {
        var rid = this.uid2Roomid(uid);
        if(rid>0)
        {
            var room = this.DataCenter.Rooms[rid];
            if(uid == room.Roomer && !room.IsGameing && room.isReady)
            {
                this.DataCenter.Rooms[rid].start();
            }
        }

        next();
    },
    onUserLeave:function(uid, next)
    {
        next();
        var rid = this.uid2Roomid(uid);
        if(rid>0)
        {
            this.DataCenter.removePerson(uid,rid);
        }

    }
})

module.exports = function(app) {
    return new CPomelo.Remote.CZJHRemote(app);
};