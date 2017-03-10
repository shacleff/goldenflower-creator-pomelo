/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
require("./CCard");
Class({
    ClassName:"Game.Data.CBasePerson",
    Cards:null,
    RoomId:null,
    Ready:false,
    Data:null,
    ctor:function(uid,sid,rid)
    {
        Object.defineProperty(this, "userid", {
            get: function () {
                return uid;
            }
        });
        Object.defineProperty(this, "sid", {
            get: function () {
                return sid;
            }
        });
        this.RoomId = rid;
        this.Cards = new Core.CMapArray("ID",this.CardsSortKeys);
    },
    AddCard:function(f,ID)
    {
        this.Cards.InsertValue(new this.CardClass(f,ID));
    },
    toJSON:function()
    {
        return this.Data;
    }
})