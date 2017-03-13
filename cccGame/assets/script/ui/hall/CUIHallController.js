require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.hall",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"hall/hall",

    onLoad:function()
    {
        var temp =this.node.getChildByName("UI_Create_Room");
        var btn = temp.getChildByName("UI_Create_Btn");
        btn.on('click', this.Btn_Create_Click, this);

        temp =this.node.getChildByName("UI_Join_Room");
        btn = temp.getChildByName("UI_Join_Btn");
        btn.on('click', this.Btn_Join_Click, this);



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
        Client.addmap("zjhJoinRes",this);
    },
    onDisable:function()
    {

        Client.removemap("zjhJoinRes",this);
    },
    Btn_Create_Click:function()
    {
        Server.zjh_join(-1);
    },
    Btn_Join_Click:function()
    {

    },
    zjhJoinRes:function(msg)
    {

        Game.SceneState.CSceneStateFSM.Instance.TransformToState(Game.Const.SceneState.StateID.ZJH);
    }
})
