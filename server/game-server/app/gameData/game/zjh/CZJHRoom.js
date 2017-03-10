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
    isReady:{
        get:function(){
            var r = false;
            if(this.m_pCurrentCount>1)
            {
                r = true;
                for(var uid in this.Persons)
                {
                    if(!this.Persons[uid].Ready)
                    {
                        r = false;
                        break;
                    }
                }
            }
            return  r;
        }
    },
    start:function()
    {
        Game.Data.CBaseRoom.prototype.start.call(this);
    }

})