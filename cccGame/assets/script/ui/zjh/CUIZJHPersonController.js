require("../../base/Core");
require("../uiBase/CUIBaseController");
require("../card/CUICardController");
Class({
    ClassName:"Game.UI.CUIController.CUIZJHPersonController",
    Base:"Game.UI.CUIBaseController",

    m_pHeadSprite:null,
    m_pNameTTF:null,

    m_pCards:null,
    Seat:0,
    m_NodeCards:null,
    DataSource:{
        get:function()
        {
            return Game.Data.CDataCenter.Instance.ZJHRoom.Value[this.Seat];
        }
    },
    onLoad:function()
    {
        this.m_pHeadSprite = this.node.getChildByName("UI_Sprite_Head").getComponent(cc.Sprite);
        this.m_pNameTTF = this.node.getChildByName("UI_TTF_Name").getComponent(cc.Label);
        var temp = this.m_NodeCards  = this.node.getChildByName("Cards");
        this.m_pCards = {};
        for(var i=1;i<4;i++)
        {
            var node = temp.getChildByName("Card{0}".Format(i));
            var cardUI = Game.UI.CUIController.CUICardController.Create();
            cardUI.parent = node;
            cardUI.setPosition(0,0);
            this.m_pCards[i] = cardUI.Controller;
        }
    },

    onEnable:function()
    {
        if(this.Seat != 0)
            this.DataSource.AddObserver(this.UpdateUI,this);
    },
    onDisable:function()
    {
        if(this.Seat != 0)
            this.DataSource.RemoveObserver(this.UpdateUI,this);
    },
    UpdateUI:function(n,o)
    {
        if(o)
        {

        }
        else
        {
            this.m_pNameTTF.string = n.name;
            this.m_NodeCards.active = false;
            //var data = Game.Data.CDataCenter.Instance.ZJHRoom.Value[this.Seat];
        }

    }
})