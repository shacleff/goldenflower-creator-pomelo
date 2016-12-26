const CLoadingController = require('CLoadingController');

Core.$Defines("Game.Const.Scene")({
    Login:"login"
});
cc.Class({
    extends: cc.Component,

    properties: {
        Loading: CLoadingController,
        NextScene:Game.Const.Scene.Login
    },

    // use this for initialization
    onLoad: function () {
        this.loadScene(this.NextScene);
    },

    loadScene: function(sceneName) {
        this.NextScene = sceneName;
        cc.director.preloadScene(this.NextScene, this.onSceneLoaded.bind(this));

        this.Loading.CompleteCallBack = this.complete;
        this.Loading.Target = this;
        this.Loading.TotalPercent = 325;
        this.Loading.StartLoad();
    },

    onSceneLoaded: function() {

        this.Loading.CurrentPercent = 325;
    },
    complete:function()
    {
        cc.director.loadScene(this.NextScene);
    }
});
