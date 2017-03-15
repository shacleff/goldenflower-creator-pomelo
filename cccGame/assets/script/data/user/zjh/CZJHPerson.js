/**
 * Created by Class on 2017/3/14.
 */

require("../base/CBasePerson");
Core.$Defines("Game.Const.CZJHPerson", global)({
    ChangeType:
    {
        "Saw":1
    }
});
Class({
    ClassName:"Game.Data.CZJHPerson",
    Base:"Game.Data.CBasePerson",

    Saw:false,
    ctor:function()
    {
        Client.addmap("onZJHSeeCards",this);
        Game.Data.CBasePerson.prototype.ctor.apply(this,arguments);
    },
    destruct:function()
    {

        Client.removemap("onZJHSeeCards",this);
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
            this.Value = {cards:value};
            this.Notify();
        }
    }

})