/**
 * Created by root on 3/8/17.
 */
require('../../../core/Core');
require('./CDataPerson');
Class({
    ClassName:"Game.Data.CDataCenter",
    Persons:{},
    SafeGetPerson:function(uid,cb)
    {
        var person = this.Persons[uid];
        if(person)
        {
            cb(person);
            return;
        }

        var self = this;
        Game.Data.CDataPerson.Create(uid,function(person)
        {
            if(person)
            {
                self.Persons[uid] = person;
                cb(person);
            }
            else
            {
                cb(null);
            }
        })
    }

}).Static({
    Instance:Core.Instance
})