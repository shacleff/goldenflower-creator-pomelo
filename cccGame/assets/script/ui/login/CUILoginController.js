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
        Client.addmap("getTokenRes",this);
        Client.addmap("newUserRes",this);
    },
    onDisable:function()
    {
        Client.removemap("getTokenRes",this);
        Client.removemap("newUserRes",this);
    },
    Btn_Visitor_Click:function()
    {
        Server.getToken(Game.Data.GameLocalData.token,0);
    },
    Btn_Wechat_Click:function()
    {
        Server.getToken(Game.Data.GameLocalData.token,1);
    },
    getTokenRes:function(msg,req)
    {
        var token = msg.token;
        var rtoken = msg.token;
        if(token)
        {
            this.loginByToken(rtoken);
        }
        else
        {
            Server.newUser(Game.Data.GameLocalData.rtoken,"asd");
        }
    },
    newUserRes:function(msg,req)
    {
        var token = msg.token;
        this.loginByToken(rtoken);
    },
    loginByToken:function(toeken)
    {
        Game.Data.GameLocalData.token = toeken;
    }
})
