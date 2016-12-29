/**
 * Created by Administrator on 2016/12/27.
 */
Core.$Defines("Server")({
    onsent: null,
    onopen: null,
    state:0,

    ///  nofity  不需要网络框
    __send: function(r,a, c, b, d,notify) {
        this[b] = function() {
            /// 回调函数
            var cb=null;
            //if(arguments[0] instanceof String) cb=arguments[0],arguments = arguments.splice(0,1);
            //var ay = arguments;
            //ay =  ay.splice(0,1);
            var i = arguments[0] instanceof Object && (arguments[0].t && arguments[0].cb) ? (cb=arguments[0],1):0;
            for (var e = {},
                     f = 0; f < d.length; f++) e[d[f]] = arguments.length < f ? null: arguments[f+i] ;
            if (d.length != arguments.length-i) throw "Message " + b + " arguments error. parameters is too short or too long.";

            //e = {
            //    pid: c,
            //    seq:1,
            //    data: JSON.stringify(e)
            //};
            //
            //if (Server.IsOpened()) {
            //    if ( this.onsent) this.onsent(e,notify );
            //    a(e,cb,notify);
            //    this.cachmsg = null
            //} else this.cachmsg = e,
            //    this.onfaildsend(e)
            if(Server.state == 1)
            {
                if ( this.onsent) this.onsent(e,notify );
                a(r,e,c,b,cb,notify);
            }
            else{
                this.onfaildsend(e);
            }
        }
    },
    onfaildsend: function(a) {},
    ondisconnect: function(a) {
        cc.log("ondisconnect:"+ a?a:"")
        this.state = 0;
    },
    onconnect: function(a) {
        cc.log("onconnect:" + a.toString())
    },
    onerror: function(a) {
        cc.log("onerror", a)
        // a.fileName ? cc.log("net-Js-error: file:" + a.fileName, " line:" + a.lineNumber, " cols:" + a.columnNumber, "\n Url is " + this.ServerUrl + "\ne:" + a) : cc.log("net-Js-error: error ", a, "\n Url is " + this.ServerUrl)
    },
    init: function() {},
    IsOpened: function() {
        return ! 1
    },
    close: function(a) {
        cc.log("close");
        this.state = 0;
    },
    sendmsg: function() {},
    beginConnect: function() {},
    disconnect:function(){}
});