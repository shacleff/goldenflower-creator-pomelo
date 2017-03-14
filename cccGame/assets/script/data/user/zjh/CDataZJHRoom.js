/**
 * Created by Administrator on 2017/3/13.
 */
require("../base/CBaseRoom");
require("../../../base/Core");
require("./CZJHPerson");

Core.$Defines("Game.Const.CDataZJHRoom", global)({
    ChangeType:
    {
        "AddP":1,
        "DelP":2,
        "Ready":3,
        "Activity":4
    }
});
Class({
    ClassName:"Game.Data.CDataZJHRoom",
    Base:"Game.Data.CBaseRoom",
    PersonClass:Game.Data.CZJHPerson,
    ctor:function()
    {
        Client.addmap("onRoomNewPerson",this);
        Client.addmap("onRoomLeavePerson",this);
        Client.addmap("onUserReady",this);
        Client.addmap("zjhJoinRes",this);
        Client.addmap("onZJHActivity",this);
        Game.Data.CBaseRoom.prototype.ctor.apply(this,arguments);
    },
    destruct:function()
    {
        Client.removemap("onRoomNewPerson",this);
        Client.removemap("onRoomLeavePerson",this);
        Client.removemap("onUserReady",this);
        Client.removemap("zjhJoinRes",this);
        Client.removemap("onZJHActivity",this);
        Game.Data.CBaseRoom.prototype.destruct.apply(this,arguments);
    },
    onRoomLeavePerson:function()
    {

    },
    onRoomNewPerson:function()
    {

    },
    onUserReady:function()
    {

    },
    zjhJoinRes:function(msg) {
        var room = msg.r;
        this.RoomID = room.id;
        this.Roomer = room.roomer;
        for(var i=0;i<room.p.length;i++)
        {
            this.addPerson(room.p[i])
        }
        this.OldValue = null;
    },
    onZJHActivity:function()
    {

    }
})