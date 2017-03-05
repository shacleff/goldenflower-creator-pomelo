/**
 * Created by root on 1/4/17.
 */

var Core = require("../core/Core");
var CBaseHttp = require("./CBaseHttp");
var consts = require('../consts/consts');
Class({
    ClassName:"Game.HttpServer.Login",
    Base:"Game.HttpServer.BaseHttp",
    Port:require("../../config/servers").http.login,
    checkFuncs:{
        "/login":"login"
    },
    login:function(reqInfo,resback)
    {
        console.warn("login ok--");
        resback({code: consts.NOR_CODE.SUC_OK,data:{"haha":1,"uid":2}});
    },
    register:function()
    {

    }
}).Static({
    Instance:Core.Instance
})
