/**
 * Created by root on 3/6/17.
 */
var mysql = require('mysql');
var pomelo = require('pomelo');
var sanitizer = require('sanitizer');
var userDao = module.exports;

userDao.getDataByAcc = function(acc,cb)
{
    var sql = 'select * from money where users = ?';
    var args = [sanitizer.sanitize(acc)];

    pomelo.app.get("dbMgr").query(sql, args, cb);
}

userDao.CreateData = function(acc,cb)
{
    var sql = 'insert into users(account) values (?)';
    var args = [sanitizer.sanitize(acc), sanitizer.sanitize(pwd)];

    pomelo.app.get('dbMgr').insert(sql, args, cb);
}