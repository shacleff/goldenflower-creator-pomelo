/**
 * Created by root on 3/8/17.
 */
require('../../../core/Core');
require('./CDBDataPerson');
Class({
    ClassName:"Game.Data.CDBDataCenter",
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
        Game.Data.CDBDataPerson.Create(uid,function(person)
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