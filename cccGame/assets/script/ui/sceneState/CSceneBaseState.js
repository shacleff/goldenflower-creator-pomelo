
require("../../base/Core");
Class({
    ClassName:"Game.SceneState.SceneStateBase",
    m_pTimer:null,
    Loader:null,
    m_pCacheInfo:null,
    ScneneName:{
        get:function()
        {
           return this.ClassName.split(".")[2];
        }
    },
    CurrentPercent:{
        set:function(v)
        {
          this.Loader.CurrentPercent = v;
        }
    },
    TotalPercent:{
        set:function(v)
        {
            this.Loader.TotalPercent = v;
        }
    },
    onEnter:function(cacheInfo)
    {
        // if(!this.m_pTimer)
        // {
        //     this.m_pTimer = setInterval(this.update,0.1,this);
        // }
        this.m_pCacheInfo = cacheInfo;
        this.Loader.CompleteCallBack = this.onComplete;
        this.Loader.Target = this;
        this.Loader.TotalPercent = 100;
        this.Loader.StartLoad();
    },
    onExit:function()
    {
       console.log("must overWrite onExit");
    },
    onComplete:function()
    {
       console.log("must overWrite onComplete");
    }
}).Static({
    Create:function()
    {
        return new this;
    }
})