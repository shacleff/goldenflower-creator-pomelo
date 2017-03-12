/**
 * Created by Class on 2017/3/10.
 */
require("../../../core/Core");
Class({
    ClassName:"Game.Data.CZJHDataCenter",
    Persons:null,
    Rooms:null,
    m_pNextRoomId:1,
    CardNums:null,
    ctor:function() {
        this.Persons={};
        this.Rooms={};
        this.CardNums = [];

        for(var i=1;i<4;i++)
        {
            for(var j=2;j<15;j++)
            {
                var num = i<<4|j;
                this.CardNums.push(num);
            }
        }
    },
    intoRoom:function(uid,rid,sid)
    {
        if(!!rid)
        {
            rid = this.m_pNextRoomId++;
            this.createRoom(uid,rid,sid);
            return rid;
        }
        if(!this.Rooms[rid])
        {
            return -1;
        }
        this.joinRoom(uid,rid,sid);
        return rid;
    },
    createRoom:function(uid,rid)
    {
        this.Rooms[rid] = new Game.Data.CZJHRoom(rid);
        this.joinRoom(uid,rid);
    },
    joinRoom:function(uid,rid)
    {
        this.Rooms[rid].addPerson(uid,sid);
        this.Persons[uid] = 1;
        return rid;
    },
    removePerson:function(uid,rid)
    {
        this.Rooms[rid].removePerson(uid);
        delete this.Persons[uid] ;
    },
    ClearRoom:function(rid)
    {
        var room = this.Rooms[rid];
        room.$Dispose();
        delete this.Rooms[rid] ;
    }


})