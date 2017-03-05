require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.login",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"login/login",

    onLoad:function()
    {
        var btn = this.node.getChildByName("UI_Button_Visitor");
        btn.on('click', this.Btn_Visitor_Click, this);

        btn = this.node.getChildByName("UI_Button_WeChat");
        btn.on('click', this.Btn_Wechat_Click, this);
    },
    start:function()
    {

        console.log("login start");
    },
    onEnable:function()
    {
        Client.addmap("loginRes",this);
    },
    onDisable:function()
    {
        Client.removemap("loginRes",this);
    },
    Btn_Visitor_Click:function()
    {
        Server.login(Game.Data.GameLocalData.token,0);
    },
    Btn_Wechat_Click:function()
    {
        Server.login(Game.Data.GameLocalData.token,1);
    },
    loginRes:function()
    {
        this.node.active = false;
    }
})
