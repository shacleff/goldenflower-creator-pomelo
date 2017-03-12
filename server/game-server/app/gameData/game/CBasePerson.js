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
    Seat:0,
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
        this.Cards = new Core.CMapArray("f",this.CardsSortKeys);
    },
    AddCard:function(f)
    {
        this.Cards.InsertValue(new this.CardClass(f));
    },
    toJSON:function()
    {
        return this.Data;
    }
})