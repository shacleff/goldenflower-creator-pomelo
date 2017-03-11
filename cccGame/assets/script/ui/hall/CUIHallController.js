require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.hall",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"hall/hall",

    onLoad:function()
    {
        //var btn = this.node.getChildByName("UI_Button_Visitor");
        //btn.on('click', this.Btn_Visitor_Click, this);
        //
        //btn = this.node.getChildByName("UI_Button_WeChat");
        //btn.on('click', this.Btn_Wechat_Click, this);


        var controllerCache = Game.SceneState.CSceneStateFSM.Instance.CurrentSceneState.Controllers;
        var ctr = Game.UI.CUIController.CUILeftTopHeadController.CreateByExistRoot(cc.find("hall/UI_Node_Head"));
        var controller = ctr.Controller;
        controllerCache[controller.PerfabName] = controller;
    },
    start:function()
    {

        console.log("login start");
    },
    onEnable:function()
    {

    },
    onDisable:function()
    {

    }
})
