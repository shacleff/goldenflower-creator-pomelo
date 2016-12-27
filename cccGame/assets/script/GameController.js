const CLoadingController = require('./ui/CLoadingController');

cc.Class({
    extends: cc.Component,

    properties: {
        Loader:CLoadingController,
        DefaultScene:Game.Const.SceneState.StateID.Login,
    },

    // use this for initialization
    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        cc.view.adjustViewPort(true);
        cc.view.setDesignResolutionSize(1366, 768,cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        var sceneFSM = Game.SceneState.CSceneStateFSM.Instance;
        sceneFSM.Loader = this.Loader;
        sceneFSM.TransformToState(this.DefaultScene);//Game.Const.SceneState.Login

    }


    // called every frame, uncomment this function to activate update callback
});
