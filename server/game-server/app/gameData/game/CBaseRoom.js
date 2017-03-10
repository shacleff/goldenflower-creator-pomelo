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
    m_pCurrentCount:0,
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
        this.Persons = {};
        this.m_pCurrentCount=0;
        this.Channel = pomelo.get('channelService').getChannel(this.ChannelName, false);
    },
    destruct:function()
    {
        pomelo.get('channelService').destroyChannel(this.ChannelName);
    },
    addPerson:function(uid,sid)
    {
        if(!this.Persons.hasOwnProperty(uid))
        {
            var  p = new this.PersonClass(uid,sid,this.Roomid);
            if(!this.Roomer)
            {
                this.Roomer = uid;
            }
            this.Persons[uid] = p;
            this.m_pCurrentCount++;
        }
        this.Channel.pushMessage(enums.PUSH_KEY.ROOM_NEW_PERSON, p, function(err, res){});
        this.Channel.add(uid,sid);
    },
    removePerson:function(uid)
    {

        if(this.Persons.hasOwnProperty(uid))
        {
            var person = this.Persons[uid], sid = person.sid;

            this.Channel.leave(uid,sid);
            this.Channel.pushMessage(enums.PUSH_KEY.ROOM_LEAVE_PERSON, uid, function(err, res){ });
            delete this.Persons[uid];
            person.$Dispose();
            this.m_pCurrentCount--;
        }


    },
    toJSON:function()
    {
        return this.Persons;
    },
    ready:function(uid,r)
    {
        this.Persons[uid].Ready = r;
        this.Channel.pushMessage(enums.PUSH_KEY.USER_READY, {userid:uid,r:r}, function(err, res){ });
    },
    start:function()
    {
        this.IsGameing = true;
    }

})