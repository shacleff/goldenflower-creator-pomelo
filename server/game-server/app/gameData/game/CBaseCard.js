/**
 * Created by Class on 2017/3/7.
 */

require("../../core/Core");
Class({
    ClassName:"Game.Data.CBaseCard",
    ID:0,
    Color:
    {
        get:function()
        {
            return this.Face>>4;
        }
    },
    Num:
    {
        get:function()
        {
            return this.Face&0xF;
        }
    },
    ctor:function(f,ID)
    {
        Object.defineProperty(this, "Face", {
            get: function () {
                return f;
            }
        });

        this.ID = ID;
    },
    toJSON:function()
    {
        return this.Face;
    }
})


//for(var i=1;i<4;i++)
//{
//    for(var j=1;j<14;j++)
//    {
//        var num = i<<4|j;
//        Cards.push(new CCard(num));
//    }
//}