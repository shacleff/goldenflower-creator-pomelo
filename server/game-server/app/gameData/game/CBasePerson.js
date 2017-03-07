/**
 * Created by Class on 2017/3/7.
 */
require("../../core/Core");
require("./CCard");
Class({
    ClassName:"Game.Data.CBasePerson",
    Cards:null,
    ctor:function(f)
    {
        Object.defineProperty(this, "userid", {
            get: function () {
                return f;
            }
        });
        this.Cards = [];
    },
    AddOneCard:function(num)
    {
        this.Cards.push(Game.Data.CCard.Create(num))
    }
})