/**
 * Created by Administrator on 2017/3/13.
 */
require("../base/CBaseRoom");
require("../../../base/Core");
Class({
    ClassName:"Game.Data.CDataZJHRoom",
    Base:"Game.Data.CBaseRoom",
    ctor:function()
    {
        Client.addmap("onRoomNewPerson",this);
        Client.addmap("onRoomLeavePerson",this);
        Client.addmap("onUserReady",this);
        Client.addmap("zjhJoinRes",this);
        Game.Data.CBaseRoom.prototype.ctor.apply(this,arguments);
    },
    destruct:function()
    {
        Client.removemap("onRoomNewPerson",this);
        Client.removemap("onRoomLeavePerson",this);
        Client.removemap("onUserReady",this);
        Client.removemap("zjhJoinRes",this);
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
    zjhJoinRes:function()
    {

    }
})