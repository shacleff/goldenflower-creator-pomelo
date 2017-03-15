require("../../base/Core");
require("../uiBase/CUIBaseController");
require("./CUIZJHPersonController");

Core.$Defines("Game.Const.CUIController.zjh")({
    BtnState:
    {
        "Start":0x1<<0,
        "Ready":0x1<<1,
        "SeeCard":0x1<<2,
        "Fllow":0x1<<3,
        "GiveUp":0x1<<4
    }
});
Class({
    ClassName:"Game.UI.CUIController.zjh",
    Base:"Game.UI.CUIBaseController",
    PerfabName:"zjh/zjh",

    m_pTTFRoomID:null,
    m_pUIPersons:null,
    m_pUIBtns:null,
    BtnState:{
        get:function()
        {
            return this.__BtnState;
        },
        set:function(v)
        {
            this.__BtnState = v;
            for(var i=0;i<5;i++)
            {
                var value = 0x1<<i;
                this.m_pUIBtns[value].active = v&value;
            }
        }
    },

    onLoad:function()
    {
        this.m_pTTFRoomID = this.node.getChildByName("UI_TTF_RoomID").getComponent(cc.Label);
        this.m_pTTFRoomID.primevalString = this.m_pTTFRoomID.string;
        this.m_pUIPersons = {};

        this.m_pUIBtns = {};
        var btns = this.node.getChildByName("Buttons");
        var btnNames = [
            ["UI_Btn_Start",this.Btn_Start_Click],
            ["UI_Btn_Ready",this.Btn_Ready_Click],
            ["UI_Btn_See",this.Btn_See_Click],
            ["UI_Btn_Follow",this.Btn_Follow_Click],
            ["UI_Btn_Pass",this.Btn_Pass_Click]];
        for(var i=0;i<btnNames.length;i++)
        {
            var btnTip = btnNames[i];
            var btn = btns.getChildByName(btnTip[0]);
            btn.on('click', btnTip[1], this);
            this.m_pUIBtns[0x1<<i] = btn;
        }

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
        var dataCenter = Game.Data.CDataCenter.Instance,roomid = dataCenter.ZJHRoom.RoomID,userid = dataCenter.User.Value.userid,roomer=dataCenter.ZJHRoom.Roomer;
        if(o)
        {
            var seat = o[0],type=o[1];
            var types = Game.Const.CDataZJHRoom.ChangeType;

            switch (type)
            {
                case types.AddP:
                {
                    this.m_pUIPersons[seat].node.active = true;
                    break;
                }
                case types.DelP:
                {
                    this.m_pUIPersons[seat].node.active = false;
                    break;
                }
                case types.Ready:
                {
                    this.BtnState = userid ==roomer ?Game.Const.CUIController.zjh.BtnState.Start :  0;
                    break;
                }
                case types.Activity:
                {

                    var btnStates = Game.Const.CUIController.zjh.BtnState;
                    var saw = dataCenter.ZJHRoom.Value[dataCenter.ZJHRoom.SelfSeat].Saw;
                    var seeCard = saw?0x0: btnStates.SeeCard;
                    var actUserid = seat;
                    if(actUserid == userid)
                    {
                        this.BtnState = seeCard | btnStates.Fllow | btnStates.GiveUp;
                    }
                    else
                    {
                        this.BtnState = seeCard;
                    }

                    break;
                }

            }
        }
        else
        {
            this.m_pTTFRoomID.string = this.m_pTTFRoomID.primevalString.Format(Game.Data.CDataCenter.Instance.ZJHRoom.RoomID);
            for(var i in n)
            {

                console.log("node true:"+i);
                this.m_pUIPersons[i].node.active = true;
            }
            console.log("ready");
            this.BtnState = userid ==roomer ?Game.Const.CUIController.zjh.BtnState.Start :  Game.Const.CUIController.zjh.BtnState.Ready;
        }
    },
    Btn_Start_Click:function()
    {
        if(Game.Data.CDataCenter.Instance.ZJHRoom.Ready)
        {
            Server.game_start(Game.Config.Games.zjh);
        }
        else
        {
            alert("can't start game,may some one not ready");
        }
    },
    Btn_Ready_Click:function()
    {
        Server.game_ready(1,Game.Config.Games.zjh);
    },
    Btn_See_Click:function()
    {
        Server.game_see(Game.Config.Games.zjh);
    },
    Btn_Follow_Click:function()
    {

    },
    Btn_Pass_Click:function()
    {

    }
})
