/**
 * Created by Class on 2017/3/14.
 */
require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.CUICardController",
    Base:"Game.UI.CUIBaseController",
    CardData:{
        value:null,
        get:function()
        {
            return this.__CardData;
        },
        set:function(v)
        {
            this.__CardData = v;
            this.setDirty();
        }
    },


    refreshUI:function()
    {
        if(this.__CardData)
        {
            var color = this.__CardData.Color;
            var value = this.__CardData.ShowValue;
        }
        else
        {

        }
    }

})