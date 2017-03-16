/**
 * Created by Class on 2017/3/14.
 */

require("../base/CBasePerson");
Core.$Defines("Game.Const.CZJHPerson", global)({
    ChangeType:
    {
        "Saw":1,
        "Pass":2
    }
});
Class({
    ClassName:"Game.Data.CZJHPerson",
    Base:"Game.Data.CBasePerson",

    Saw:false,
    Pass:false,
    BasePoint:{
        get:function()
        {
            return Game.Data.CDataCenter.Instance.ZJHRoom.CurrentPoint * (this.Saw?2:1)
        }
    },
    Reset:function()
    {
        this.OldValue = null;
        this.Saw = false;
        this.__ready = false;
        delete this.Value.cards;
        this.Pass = false;
        this.Notify();
    },
    CheckPointRight:function(point)
    {
        return point%(this.Saw?2:1) == 0 && point>=this.BasePoint;
    },
    ctor:function()
    {
        Client.addmap("onZJHSeeCards",this);
        Client.addmap("onZJHOnePersonSeeCards",this);

        Game.Data.CBasePerson.prototype.ctor.apply(this,arguments);
    },
    destruct:function()
    {
        Client.removemap("onZJHSeeCards",this);
        Client.removemap("onZJHOnePersonSeeCards",this);
    },
    onUserReady:function(r)
    {
        this.IsReady = r==1;
    },

    onZJHSeeCards:function(msg)
    {
        if(this.Value.userid == Game.Data.CDataCenter.Instance.User.Value.userid)
        {
            var value = [msg[0],msg[1],msg[2]];
            this.OldValue = [Game.Const.CZJHPerson.ChangeType.Saw,value];
            this.PersonInfo = {cards:value};
            this.Notify();
        }
    },
    onZJHOnePersonSeeCards:function(msg)
    {
        if(msg.seat == this.Value.seat)
        {
            this.OldValue = Game.Const.CZJHPerson.ChangeType.Saw;
            this.Saw = true;
            this.Notify();
        }
    }

})