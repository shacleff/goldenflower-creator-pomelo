
require("../../base/Core");
var baseCompent = require("./CUIBaseComponent");
Class({
    ClassName:"Game.UI.CUIBaseController",
    node:null,
    setDirty:function()
    {
        setTimeout(this.refreshUI,1,this);
    },
    refreshUI:function()
    {
        console.warn("must overwrite this refreshUI");
    }
}).Static({
    Create:function(){
        var cInstance = new this;
        var perfab = Game.SceneState.CSceneStateFSM.Instance.CurrentSceneState.Prefabs[cInstance.PerfabName];
        var pInstance = cc.instantiate(perfab);
        pInstance.addComponent(baseCompent);
        cInstance.node = pInstance;
        pInstance.Controller = cInstance;
        if(cInstance.init)
            cInstance.init.apply(cInstance,arguments);
        return pInstance;

    }
    //initCompent:function()
    //{
    //    var props =[
    //        "onLoad",
    //        "start",
    //        "update",
    //        "lateUpdate",
    //        "onDestroy",
    //        "onEnable",
    //        "onDisable"
    //    ]
    //    for(var i=0;i<props.length;i++)
    //    {
    //        var key = props[i];
    //        cc.Component.prototype[key] = Game.UI.CUIBaseController.prototype[key]
    //    }
    //}
})

