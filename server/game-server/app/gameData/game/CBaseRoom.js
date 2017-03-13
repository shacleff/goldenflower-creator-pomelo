/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
require("../../core/CMapArray");
var enums = require("../../consts/enums");

Class({
    ClassName:"Game.Data.CBaseRoom",
    Persons:null,
    Roomer:null,
    PersonClass:null,
    Roomid:-1,
    MaxCount:1,
    m_pCurrentCount:{
        get:function()
        {
            return this.Persons.Ay.length;
        }
    },
    Channel:null,
    IsGameing:false,
    IsFull:{
        get:function()
        {
            return this.m_pCurrentCount == this.MaxCount;
        }
    },
    ChannelName:{
        get:function()
        {
            return "room_"+this.Roomid;
        }
    },
    ctor:function(id) {
        this.Roomid = id;
        this.Persons = new Core.mapArray("userid",[{"Seat":true}]);
        this.Channel = Core.app.get('channelService').getChannel(this.ChannelName, true);
    },
    destruct:function()
    {
        Core.app.get('channelService').destroyChannel(this.ChannelName);
    },
    addPerson:function(uid,sid)
    {
        var p = null;
        if(!this.Persons.Map.hasOwnProperty(uid))
        {
            p = new this.PersonClass(uid,sid,this.Roomid);
            if(!this.Roomer)
            {
                this.Roomer = uid;
            }
            this.Persons.InsertValue(p);
        }
        var res = {};
        res[enums.PUSH_KEY.ROOM_NEW_PERSON] = p;
        if(this.Persons.Ay.length>0)
            this.Channel.pushMessage(enums.PUSH_KEY.PUSH,res , function(err, res){ });

        this.Channel.add(uid,sid);
        return p;
    },
    removePerson:function(uid)
    {

        if(this.Persons.Map.hasOwnProperty(uid))
        {
            var person = this.Persons.Map[uid], sid = person.sid;

            this.Channel.leave(uid,sid);
            this.Persons.RemoveValue(uid);
            person.$Dispose();


            if(this.m_pCurrentCount == 0)
            {
                Game.Data.CZJHDataCenter.Instance.ClearRoom(this.Roomid);
            }
            else
            {
                var value = {uid:uid};
                if(uid == this.Roomer)
                {
                    for(var key in this.Persons)
                    {
                        this.Roomer = key;
                        value[roomer] = key;
                        break;
                    }
                }
                var res = {};
                res[enums.PUSH_KEY.ROOM_LEAVE_PERSON] = value;
                this.Channel.pushMessage(enums.PUSH_KEY.PUSH,res , function(err, res){ });
            }

        }



    },
    toJSON:function()
    {
        return {id:this.Roomid,roomer:this.Roomer,p:this.Persons};
    },
    ready:function(uid,r)
    {
        this.Persons.Map[uid].Ready = r;
        var res = {};
        res[enums.PUSH_KEY.USER_READY] = {userid:uid,r:r};
        this.Channel.pushMessage(enums.PUSH_KEY.PUSH,res , function(err, res){ });
    },
    start:function()
    {
        this.IsGameing = true;
    },
    overGame:function(winners)
    {
        this.IsGameing = false;
    }

})