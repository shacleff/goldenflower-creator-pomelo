/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
require("./CCard");
Class({
    ClassName:"Game.Data.CBasePerson",
    Cards:null,
    ctor:function(uid)
    {
        Object.defineProperty(this, "userid", {
            get: function () {
                return uid;
            }
        });

        this.Cards = new Core.CMapArray("ID",this.CardsSortKeys);
    },
    AddCard:function(f,ID)
    {
        this.Cards.InsertValue(new this.CardClass(f,ID));
    }
})