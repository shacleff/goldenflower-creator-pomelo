require("../../base/Core");
require("../uiBase/CUIBaseController");

Class({
    ClassName:"Game.UI.CUIController.hall",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"hall/hall",

    m_SearchPannel:null,
    m_Input:null,
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

        this.m_SearchPannel = this.node.getChildByName("UI_Room_Search");
        temp = this.m_SearchPannel.getChildByName("UI_Bg");
        this.m_Input = temp.getChildByName("UI_Input").getComponent("cc.EditBox");
        btn = temp.getChildByName("UI_Btn_Search");
        btn.on('click', this.Btn_Search_Click, this);


        btn = temp.getChildByName("UI_Btn_Close");
        btn.on('click', this.Btn_Close_Search_Click, this);
        this.m_SearchPannel.active = false;
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
        Server.game_join(-1,Game.Config.Games.zjh);
    },
    Btn_Join_Click:function()
    {

        this.m_SearchPannel.active = true;
    },
    zjhJoinRes:function(msg)
    {

        Game.SceneState.CSceneStateFSM.Instance.TransformToState(Game.Const.SceneState.StateID.ZJH);
    },
    Btn_Search_Click:function()
    {
        var num = parseInt(this.m_Input.string);
        this.m_Input.string="";
        if(num)
            Server.game_join(num,Game.Config.Games.zjh);
    },
    Btn_Close_Search_Click:function()
    {
        this.m_SearchPannel.active = false;
    }
})
