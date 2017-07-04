/**
 * Created by root on 6/10/17.
 */
require("../core/Core");

Class({
    ClassName:"Game.Data.CFG.CConfigData",


    CFG:null,
    ParseJsonkeys : function(res){
        var map = {};


        var keys = arguments[1];
        var count = keys.length;
        for (var key in res){

            var info = res[key];
            var tempmap = map;
            for(var i=0;i<count;i++)
            {
                var tempKey = info[keys[i]];
                if(i == count-1)
                {
                    tempmap[tempKey] = info;
                }
                else
                {
                    tempmap = tempmap.hasOwnProperty(tempKey)?tempmap[tempKey]:tempmap[tempKey]={};
                }
            }
        }


        return map;
    },
    loadDefaultJSON:function(app)
    {
        this.CFG = {};
        var rootPath = app.getBase();
        var cfgs = this.constructor.CFG_DATA;
        for(var key in cfgs)
        {
            var fileContent = Core.forceRequire(rootPath+ '/config/data/'+key);
            this.CFG[key] = this.ParseJsonkeys(fileContent,cfgs[key])
        }
    },
    loadJSONs:function(app,loadJsons)
    {
        this.CFG = {};
        var rootPath = app.getBase();
        var cfgs = this.constructor.CFG_DATA;
        for(var i=0;i<loadJsons.length;i++)
        {
            var key = loadJsons[i];
            var fileContent = Core.forceRequire(rootPath+ '/config/data/'+key);
            this.CFG[key] = this.ParseJsonkeys(fileContent,cfgs[key])
        }
        this.afterInit();
    },
    loadClubJSON:function(app)
    {
        var loadJsons = ["club","constant"];
        this.loadJSONs(app,loadJsons);
    },
    loadBusinessJSON:function(app)
    {

        var loadJsons = ["huType","room","club","constant"];
        this.loadJSONs(app,loadJsons);

    },
    afterInit:function()
    {
        
    }

}).Static({
    CFG_DATA:{
       "huType":["name"],
        "room":["num","mem","club"],
        "club":["id"],
        "constant":["id"]
    },
    Instance:Core.Instance
})
