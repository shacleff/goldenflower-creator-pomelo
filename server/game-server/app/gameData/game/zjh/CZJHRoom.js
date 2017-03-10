/**
 * Created by Class on 2017/3/10.
 */
require("../CBaseRoom");

// 2-14   14=A
Class({
    ClassName: "Game.Data.CZJHRoom",
    Base: "Game.Data.CBaseRoom",
    PersonClass:Game.Data.CZJHPerson,
    MaxCount:4,
    
    start:function()
    {
        Game.Data.CBaseRoom.prototype.start.call(this);
    }

})