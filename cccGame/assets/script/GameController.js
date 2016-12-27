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
        var self = this;
        var sceneFSM = Game.SceneState.CSceneStateFSM.Instance;
        sceneFSM.Loader = this.Loader;
        sceneFSM.TransformToState(this.DefaultScene);//Game.Const.SceneState.Login
        // cc.loader.loadResAll(Game.Config.Path.DataPath, function (err, jsons) {
        //     self.gameInit();
        // });
        //
    }
    // gameInit: function ()
    // {
    //     Game.Config.init();
    // }

    // called every frame, uncomment this function to activate update callback
});
