/**
 * Created by root on 3/8/17.
 */

var consts = require('../../../consts/consts');
require('../../../core/Core');
require('../../../base/CBaseRemote');
require('../gameData/CDataCenter');


Class({
    ClassName:"CPomelo.Remote.CDBRemote",
    Base:"CPomelo.Remote.CBaseRemote",
    GetUser:function(uid, cb)
    {
        Game.Data.CDataCenter.Instance.SafeGetPerson(uid,function(person)
        {
            if(person)
            {
                var userInfo = person.UserData;
                cb(null,{p:userInfo});
                return;
            }
            cb(null,{code:consts.LOGIN.DB_GETINFO_ERROR})
        })
    }
})

module.exports = function(app) {
    return new CPomelo.Remote.CDBRemote(app);
};