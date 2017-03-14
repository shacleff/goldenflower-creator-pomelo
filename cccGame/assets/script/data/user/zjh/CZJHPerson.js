/**
 * Created by Class on 2017/3/14.
 */

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
        Game.Data.CBasePerson.prototype.destruct.apply(this,arguments);
    },
    onUserReady:function()
    {

    },

    onZJHSeeCards:function()
    {
        this.OldValue = [Game.Const.CZJHPerson.ChangeType.Saw,this.Saw];
    }

})