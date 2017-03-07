/**
 * Created by root on 3/6/17.
 */
require("../../core/Core");
var userDao = require("../../dao/userDao");
Class({
    ClassName:"Game.Data.CUserData"

}).Static({
    CreateByData:function(acc,name,sex,cb)
    {
        userDao.CreateData(acc,name,sex,function(err,data)
        {
            if(err)
            {
                cb(err,null)
            }
            else
            {
                cb(null,{"userid":data.insertId})
            }
        })
    },
    CreateByMysql:function(acc,cb)
    {
        userDao.getDataByAcc(acc,function(err,data)
        {
            if(err)
            {
                cb(err,null)
            }
            else
            {
                cb(null,data[0])
            }
        })
        //cb({
        //    userid:1,
        //    name:1,
        //    sex:1,
        //    headimg:1,
        //    lv:1,
        //    exp:1,
        //    coins:1,
        //    gems:1
        //})
    }
})