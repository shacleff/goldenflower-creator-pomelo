/**
 * Created by Class on 2016/6/7.
 */
var cmd = 'lsof -i :';

// 用于执行一个命令
var exec = require('child_process').exec;

var servers = require("./game-server/config/servers")["production"];
var master = require("./game-server/config/master")["production"];

for (var sname in servers) {
    var say = servers[sname];
    for (var i = 0; i < say.length; i++) {
        var port = say[i].port;
        cmd += (port + ",");
    }
}

cmd += master.port;

// 
console.log(JSON.stringify(cmd));

// 
var killed = {};

/**
 * err     执行出错
 * stdout  执行输出结果
 * stderr   
 */
exec(cmd, function (err, stdout, stderr) {

    // 执行命令出错
    if (err) {
        return console.log(err);
    }

    // 
    stdout.split('\n').filter(function (line) {
        var p = line.trim().split(/\s+/);
        var address = p[1];

        if (!killed[address] && address == parseInt(address)) {
            killed[address] = true;
            console.log("kill address:" + address);

            // 杀死
            exec("kill -9 " + address, function (err, stdout, stderr) {
                if (err) {
                    return console.log(err);
                }
            })
        }
    });
});