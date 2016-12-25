/**
 * Created by Administrator on 2016/11/29.
 */

var Core = require("../base/Core");
Core.$Defines("Game.Config")({
    init:function()
    {
        Game.Data.init();
    },
    Path:{
        DataPath:"data"
    },
    Data: {
        "StaticNames":
        {
            "Servers":[ "server","id","id"],
            "loadingtips_Table":[ "loadingtips","id","type", "id" ]
        }
    }
});