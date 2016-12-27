require("../../base/Core");
Class({
    ClassName:"Game.SceneState.login",
    Base:"Game.SceneState.SceneStateBase",
    m_pTimer:null,
    Loader:null,
    
    onEnter:function()
    {
        var self = this;
        cc.loader.loadResAll(Game.Config.Path.DataPath, function (err, jsons) {
            self.GameDataInit();
        });
        
        
        this._super();
    },
    GameDataInit:function()
    {
        Game.Config.init();
        this.CurrentPercent = 30;
        cc.director.preloadScene(this.ScneneName, this.onSceneLoaded.bind(this));
    },
    onSceneLoaded:function()
    {
        this.CurrentPercent = 100;
    },
    onExit:function()
    {
       
    },
    onComplete:function()
    {
       cc.director.loadScene(this.ScneneName);
    }
})
