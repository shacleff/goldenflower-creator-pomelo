/**
 * Created by Class on 2017/3/14.
 */
Class({
    ClassName:"Game.Data.CZJHPerson",
    Base:"Game.Data.CBasePerson",

    ctor:function()
    {

        Client.addmap("onZJHActivity",this);
        Client.addmap("onZJHSeeCards",this);
        Game.Data.CBasePerson.prototype.ctor.apply(this,arguments);
    },
    destruct:function()
    {
        Client.removemap("onZJHActivity",this);
        Client.removemap("onZJHSeeCards",this);
        Game.Data.CBasePerson.prototype.destruct.apply(this,arguments);
    },
    onUserReady:function()
    {

    },
    onZJHActivity:function()
    {

    },
    onZJHSeeCards:function()
    {

    }

})