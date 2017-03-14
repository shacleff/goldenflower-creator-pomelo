/**
 * Created by Class on 2017/3/10.
 */
require("../CBaseRoom");
require("./CZJHPerson");
var enums = require("../../../consts/enums");

// 2-14   14=A
Class({
    ClassName: "Game.Data.CZJHRoom",
    Base: "Game.Data.CBaseRoom",
    PersonClass:Game.Data.CZJHPerson,
    MaxCount:4,
    OfflinePersons:null,
    GiveUps:null,
    HallPoint:0,
    CurrentPoint:0,
    CurrentActivity:0,
    Nums:null,
    LastWinner:-1,
    GamePersons:null,
    isReady:{
        get:function(){
            var r = false;
            if(this.m_pCurrentCount>1)
            {
                r = true;
                var map = this.Persons.Map;
                for(var uid in map)
                {
                    if(!map[uid].Value.Ready)
                    {
                        r = false;
                        break;
                    }
                }
            }
            return  r;
        }
    },
    ctor:function()
    {
        this.m_pFreeSeats = [3,2,1];
        Game.Data.CBaseRoom.prototype.ctor.apply(this,arguments);
    },
    PersonIsInGame:function(uid)
    {
        for(var i=0;i< this.GamePersons.length;i++)
        {
            if(uid == this.GamePersons[i])
                return true;
        }
        return false ;
    },
    start:function()
    {
        this.GamePersons = [];
        this.OfflinePersons = {};
        this.GiveUps = {};
        this.HallPoint = 0;
        this.CurrentPoint = 1;
        var nums = [].concat(Game.Data.CZJHDataCenter.Instance.CardNums) ;

        var ay = this.Persons.Ay;


        for(var i=0;i<ay.length;i++)
        {
            ay[i].reset();
            this.GamePersons.push(ay[i].userid)
        }
        for(var j=0;j<3;j++)
        {
            for(var i=0;i<ay.length;i++)
            {
                var idx = parseInt(Math.random()*nums.length);
                var temp = nums.splice(idx,1)[0];
                ay[i].AddCard(temp);
            }
        }

        this.Nums = nums;
        this.CurrentActivity = this.Persons.Map[this.LastWinner<0?this.Roomer:this.LastWinner].Index;
        Game.Data.CBaseRoom.prototype.start.call(this);
        this.next();
    },
    overGame:function(winner)
    {
        this.LastWinner = winner;
        Game.Data.CBaseRoom.prototype.overGame.call(this,[winner]);
        this.OfflinePersons = {};
        this.GiveUps = {};
        this.GamePersons = [];

        var cards = {};
        var persons = this.Persons.Map;
        for(var i in persons)
        {
            cards[id] = persons[i].Value.Cards;
        }
        var res = {};
        res[enums.PUSH_KEY.GAME_ZJH.SEE_CARDS] = this.Cards;
        this.Channel.pushMessage(enums.PUSH_KEY.PUSH, res, function(err, res){ });
    },

    removePerson:function(uid)
    {
        var winner = null;
        if(this.IsGameing)
        {
            var map = this.Persons.Map;
            var person = map[uid].Value;
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
            else
            {
                for(var i in this.GamePersons)
                {
                    if(this.GamePersons[i] == uid)
                    {
                        this.GamePersons.splice(i,1);
                    }
                }
            }
            if(winner)
                this.overGame();
        }
        Game.Data.CBaseRoom.prototype.removePerson.apply(this,arguments);
    },
    next:function(obj)
    {
        this.CurrentActivity = this.CurrentActivity%this.GamePersons.length;
        obj = obj || {};
        obj["hp"] = this.HallPoint;
        obj["au"] = this.GamePersons[this.CurrentActivity];
        var res = {};
        res[enums.PUSH_KEY.GAME_ZJH.NEXT_ACTIVITY] = obj;
        this.Channel.pushMessage(enums.PUSH_KEY.PUSH, res, function(err, res){ });
    },
    seeCards:function(uid)
    {
        var inGame = this.PersonIsInGame(uid);
        if(!inGame)
        {
            return
        }
        this.Persons.Map[uid].Value.seeCards();
    },
    giveup:function(uid)
    {
        var inGame = this.PersonIsInGame(uid);
        if(!inGame)
        {
            return
        }
        for(var i=0;i<this.GamePersons.length;i++)
        {
            if(uid == this.GamePersons[i])
            {
                this.GamePersons.splice(i,1);
            }
        }
        if(1 == this.GamePersons.length)
        {
            this.overGame(this.GamePersons[0]);
        }
        else
        {

            this.seeCards(uid);
            this.next();
        }
    },
    follow:function(uid,point)
    {
        point = parseInt(point);
        var inGame = this.PersonIsInGame(uid);
        if(!inGame)
        {
            return
        }
        var radix = person.Radix;
        var minPoint = this.CurrentPoint*radix;
        var nBasePoint = 0;
        if(point >= minPoint && point%radix === 0)
        {
            nBasePoint = point/radix;
        }
        else
        {
            return;
        }

        var person = this.Persons.Map[uid].Value;
        this.CurrentActivity++;
        this.HallPoint += point;
        this.next();

    }
})