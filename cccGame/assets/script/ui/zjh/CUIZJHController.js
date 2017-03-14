require("../../base/Core");
require("../uiBase/CUIBaseController");
require("./CUIZJHPersonController");

Class({
    ClassName:"Game.UI.CUIController.zjh",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"zjh/zjh",

    m_pTTFRoomID:null,
    m_pUIPersons:null,
    onLoad:function()
    {
        this.m_pTTFRoomID = this.node.getChildByName("UI_TTF_RoomID");
        this.m_pUIPersons = {};

        var temp = this.node.getChildByName("zjh_person");
        for(var i=1;i<4;i++)
        {
            var pui = temp.getChildByName("zjh_person{0}".Format(i));

            var ctr = Game.UI.CUIController.CUIZJHPersonController.CreateByExistRoot(pui).Controller;
            this.m_pUIPersons[i] = ctr;
            pui.active = false;
            ctr.Seat = i;
        }
    },

    onEnable:function()
    {
        Game.Data.CDataCenter.Instance.ZJHRoom.AddObserver(this.UpdateUI,this);
    },
    onDisable:function()
    {
        Game.Data.CDataCenter.Instance.ZJHRoom.RemoveObserver(this.UpdateUI,this);
    },
    UpdateUI:function(n,o)
    {
        if(o)
        {

        }
        else
        {
            for(var i in n)
            {
                this.m_pUIPersons[i].node.active = true;
            }
        }
    }
})
