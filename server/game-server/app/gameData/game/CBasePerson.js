/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
require("../../core/CMapArray");
require("./CBaseCard");
Class({
    ClassName:"Game.Data.CBasePerson",
    Cards:null,
    RoomId:null,
    Ready:false,
    Data:{
        get:function()
        {
            return this.__Data;
        },
        set:function(v)
        {
            this.__Data = {
                "userid": v.userid,
                "head": v.head,
                "sex": v.sex,
                "name": v.name,
                "point":0,
                "seat":this.Seat
            };
        }
    },
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
        this.Cards = new Core.mapArray("f",this.CardsSortKeys);
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