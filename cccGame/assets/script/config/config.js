/**
 * Created by Administrator on 2016/11/29.
 */

var Core = require("../base/Core");
Core.$Defines("Game.Config")({
    init:function()
    {
        Game.Data.init();
        Server.init("{0}/protocol.json".Format(this.Path.DataPath));
        Client.init();
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