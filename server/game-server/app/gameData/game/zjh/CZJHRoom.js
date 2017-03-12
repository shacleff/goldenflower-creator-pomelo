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
    OfflinePersons:null,
    GiveUps:null,
    hallPoint:0,
    CurrentActivity:0,
    isReady:{
        get:function(){
            var r = false;
            if(this.m_pCurrentCount>1)
            {
                r = true;
                var map = this.Persons.Map;
                for(var uid in map)
                {
                    if(!map[uid].Ready)
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
        this.OfflinePersons = {};
        this.GiveUps = {};
        this.hallPoint = 0;
        Game.Data.CBaseRoom.prototype.start.call(this);
    },
    overGame:function(winner)
    {

        Game.Data.CBaseRoom.prototype.overGame.call(this,[winner]);
        this.OfflinePersons = {};
        this.GiveUps = {};
    },

    removePerson:function(uid)
    {
        var winner = null;
        if(this.IsGameing)
        {
            var map = this.Persons.Map;
            var person = map[uid];
            this.OfflinePersons[uid] = person;
            if(this.m_pCurrentCount == 2)
            {
                for(var key in map)
                {
                    if(key != uid)
                    {
                        winner = key;
                        break;
                    }
                }
            }
        }
        Game.Data.CBaseRoom.prototype.removePerson.apply(this,arguments);

        if(winner)
            this.overGame();
    },
    next:function()
    {
        this.CurrentActivity++;
    },
    seekCards:function(uid)
    {

    },
    giveup:function(uid)
    {
        this.next();
    },
    follow:function(uid)
    {

        this.next();
    }


})