/**
 * Created by root on 3/4/17.
 */
module.exports = {
    GAME_INFO:{
        HOST:"192.168.2.7",
        PORT:3010
    },
    NOR_CODE : {
        SUC_OK						: 0,		// success
        ERR_FAIL					: -1,		// Failded without specific reason


        ERR_UNKNOWN                 :-100
    },
    LOGIN:{
        REGIEST_FAIL                : 10001,
        LOGIN_FAIL                : 10002,
        LOGIN_TOKEN_ERR                : 10003,
        CREATE_USER_ERROR   :10004
    }
};