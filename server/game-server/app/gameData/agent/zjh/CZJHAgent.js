/**
 * Created by Class on 2017/3/22.
 * 
 * 扎金花游戏数据
 */
require("../base/CBaseAgent");

Class({
    ClassName: "Game.Agent.CZJHAgent",  //
    Base: "Game.Agent.CBaseAgent",      //基类名字
    Room: null,
    IsMineAction:
    {
        get: function () {
            return this.Room.GamePersons[this.Room.CurrentActivity] == this.UserId;
        }
    },
    Action: function () {

    },
    RemoveController: function () {

    }
})