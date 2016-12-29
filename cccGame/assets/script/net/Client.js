/**
 * Created by Administrator on 2016/12/27.
 */
Core.$Defines("Client")({
    onrecv: null,
    _default: function(a) {
        delete a.payloadName;
        cc.log("CMD NOT SUPPORT: ", a)
    },
    addmap: function(a, c, b, d) {
        throw "addmap: Client not init.";
    },
    removemap: function(a, c) {},
    onsyserror: function(a, c) {
        if (this.onrecv) this.onrecv();
        cc.log("net-Js-error:" + a + "\nfile:" + a.fileName, " line:" + a.lineNumber, " cols:" + a.columnNumber, "\n ", String(c))
    },
    onservererror: function(a, c) {
        cc.log("server err:" + a)
    },
    onbussinesserror: function(a) {
        cc.log("onbussinesserror error:ID ", a.ID, " errorcode:", a.errorCode)
    }
});