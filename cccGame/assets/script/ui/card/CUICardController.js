/**
 * Created by Class on 2017/3/14.
 */
require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.CUICardController",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"common/card",
    m_pFrontNode:null,
    m_pBackNode:null,
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
            this.m_pBackNode.active = false;
            this.m_pFrontNode.active = true;

            var color = this.__CardData.Color;
            var value = this.__CardData.ShowValue;
        }
        else
        {
            this.m_pBackNode.active = true;
            this.m_pFrontNode.active = false;
        }
    },
    onLoad:function()
    {
        this.m_pFrontNode = this.node.getChildByName("UI_Sprite_Front");
        this.m_pBackNode = this.node.getChildByName("UI_Sprite_Back");
    }

})