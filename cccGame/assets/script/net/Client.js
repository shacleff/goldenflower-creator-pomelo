/**
 * Created by Administrator on 2016/12/27.
 */
Core.$Defines("Client")({
    onrecv: null,
    _default: function(a) {
        delete a.payloadName;
        cc.log("CMD NOT SUPPORT: ", a)
    },
    getFunIdx:function(a, b,_c)
    {
        for (var c = 0; c < a.length; c++) if (a[c][1] == b &&(!_c ||  _c==a[c][0])) return c;
        return - 1
    },
    initFunData:function(a,b)
    {
        var c, d, e;
        cc.assert(void 0 !== a && (!isNaN(a) || a.constructor === String), "getmapObject[addmap|removemap]:" + a + " MUST an number or string");
        cc.assert(void 0 !== b, "getmapObject[addmap|removemap]: funOrObject  MUST an function or object");
        if (isNaN(a)) {
            var f = M[a];
            cc.assert(void 0 !== f, "getmapObject[addmap|removemap]:" + a + " is not defined in protocol.json");
            c = f.ID;
            d = a;
            e = f.item
        } else c = a,
            e = I[c],
            d = f.name;
        b.constructor == Function ? f = b: (f = b[d],  cc.assert(void 0 !== f, "getmapObject[addmap|removemap]:" + d + "is not a function."));
        return {
            ID: c,
            Fun: f,
            Name: d,
            Mapitem: e
        }
    },
    addmap: function(b, c, d, e) {
        var a = this.initFunData;
        void 0 === e && (e = c);
        var f = a(b, e),
            k = T,
            m = f.ID,
            u = f.Fun;
        void 0 === k[m] && (k[m] = []);
        for (var q = [], t = 4; t < arguments.length; t++) q[t - 4] = arguments[t];
        f = 0 === q.length ? l(k[m], [c, u, g, f.Mapitem, d]) : l(k[m], [c, u,
            function(a) {
                for (var b = {},
                         c = 0; c < q.length; c++) {
                    var d = q[c];
                    b[d] = a[d]
                }
                return b
            },
            f.Mapitem, d]);
        cc.assert(f, "the function has insert before.")
    },
    removemap: function(b, c) {
        var a = this.initFunData;
        var d = a(b, c);
        var obj = T[d.ID]
        if (obj) {
            var e = obj,
                d = this.getFunIdx(e, d.Fun,c);
            0 > d || e.splice(d, 1)
        }
    },
    onsyserror: function(a, c) {
        if (this.onrecv) this.onrecv();
        cc.log("net-Js-error:" + a + "\nfile:" + a.fileName, " line:" + a.lineNumber, " cols:" + a.columnNumber, "\n ", String(c))
    },
    onservererror: function(a, c) {
        cc.log("server err:" + a)
    },
    onbussinesserror: function(a) {
        cc.log("onbussinesserror error:ID ", a.ID, " errorcode:", a.errorCode)
    },

    init:function()
    {

    }
});