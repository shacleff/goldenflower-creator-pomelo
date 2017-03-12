/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
var enums = require("../../consts/enums");
var pomelo = require("pomelo");
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
        this.Persons = new Core.CMapArray("userid",[{"Seat":true}]);
        this.Channel = pomelo.get('channelService').getChannel(this.ChannelName, false);
    },
    destruct:function()
    {
        pomelo.get('channelService').destroyChannel(this.ChannelName);
    },
    addPerson:function(uid,sid)
    {
        if(!this.Persons.Map.hasOwnProperty(uid))
        {
            var  p = new this.PersonClass(uid,sid,this.Roomid);
            if(!this.Roomer)
            {
                this.Roomer = uid;
            }
            this.Persons.InsertValue(p);
        }
        this.Channel.pushMessage(enums.PUSH_KEY.ROOM_NEW_PERSON, p, function(err, res){});
        this.Channel.add(uid,sid);
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
                var res = {uid:uid};
                if(uid == this.Roomer)
                {
                    for(var key in this.Persons)
                    {
                        this.Roomer = key;
                        res[roomer] = key;
                        break;
                    }
                }
                this.Channel.pushMessage(enums.PUSH_KEY.ROOM_LEAVE_PERSON, res, function(err, res){ });
            }

        }



    },
    toJSON:function()
    {
        return this.Persons;
    },
    ready:function(uid,r)
    {
        this.Persons.Map[uid].Ready = r;
        this.Channel.pushMessage(enums.PUSH_KEY.USER_READY, {userid:uid,r:r}, function(err, res){ });
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