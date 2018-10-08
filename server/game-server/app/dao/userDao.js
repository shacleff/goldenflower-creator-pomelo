/**
 * Created by root on 3/6/17.
 */
var mysql = require('mysql');
var pomelo = require('pomelo');
var sanitizer = require('sanitizer');
var userDao = module.exports;

// 创建新的用户
userDao.CreateData = function (acc, name, sex, cb) {
    var sql = 'insert into users(`account`,`name`,sex) values (?,?,?)';
    var args = [sanitizer.sanitize(acc), sanitizer.sanitize(name), sex];
    pomelo.app.get('dbMgr').insert(sql, args, cb);
}

// 查询指定账号信息
userDao.getDataByAcc = function (acc, cb) {
    var sql = 'select * from users where `account` = ?';
    var args = [sanitizer.sanitize(acc)];
    pomelo.app.get("dbMgr").query(sql, args, cb);
}

// 根据uid得到账号信息
userDao.getDataByUid = function (uid, cb) {
    var sql = 'select * from users where userid = ?';
    var args = [sanitizer.sanitize(uid)];

    pomelo.app.get("dbMgr").query(sql, args, cb);
}