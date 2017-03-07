/**
 * Created by Class on 2017/3/7.
 */
Class({
    ClassName:"Game.Data.CZJHPerson",
    Base:"Game.Data.CPerson",
    Type:{
        get :function(){

        }
    }

}).Static({
    Create:function(f)
    {
        return new this(f);
    }
})