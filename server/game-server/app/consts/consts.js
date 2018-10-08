/**
 * Created by root on 3/4/17.
 */
module.exports = {

    // 连接服务器
    GAME_INFO: {
        HOST: "127.0.0.1",
        PORT: 3010
    },

    // 游戏玩法种类
    Games: {
        1: "zjh",   //扎金花
        2: "niuniu" //牛牛
    },

    // 
    NOR_CODE: {
        SUC_OK: 0,		    // success
        ERR_FAIL: -1,		// Failded without specific reason
        ERR_UNKNOWN: -100   // 未知错误
    },

    // 
    LOGIN: {
        REGIEST_FAIL: 10001,
        LOGIN_FAIL: 10002,
        LOGIN_TOKEN_ERR: 10003,
        CREATE_USER_ERROR: 10004,
        DB_GETINFO_ERROR: 10005,
        TOKEN_OUT_TIME: 10006,
        LOGIN_LOGINED: 10007
    }
};