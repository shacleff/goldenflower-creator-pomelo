/**
 * Created by Administrator on 2016/12/27.
 */
Core.$Defines("Server")({
    onsent: null,
    onopen: null,
    state:0,
    m_pIdMaps:{},
    m_pNameMaps:{},
    __send: function(r,a, c, b, d,notify) {
        this[b] = function() {
            /// 回调函数
            var cb=null;
            var i = arguments[0] instanceof Object && (arguments[0].t && arguments[0].cb) ? (cb=arguments[0],1):0;
            for (var e = {},
                     f = 0; f < d.length; f++) e[d[f]] = arguments.length < f ? null: arguments[f+i] ;
            if (d.length != arguments.length-i) throw "Message " + b + " arguments error. parameters is too short or too long.";

            if(this.state == 1)
            {
                if ( this.onsent) this.onsent(e,notify );
                a(r,e,c,b,cb,notify);
            }
            else{
                this.onfaildsend(e);
            }
        }
    },

    init:function(protocol)
    {
        var I = this.m_pIdMaps,M=this.m_pNameMaps;
        var b = cc.loader.getRes(protocol);
        var tKeys = ["Server","Client"];
        var k,l;
        for (var e = 0; e <tKeys.length; e++) {
            var f = b[tKeys[e]];
            if ("Client" === tKeys[e]) for (var g = 0; g < f.length; g++) {
                l = f[g];
                cc.assert( l.ID && l.name, "protocol error.");
                cc.assert(!this.hasOwnProperty(l.name), l.name + " protocol has defined.");
                k = l.parameters ? l.parameters.split(";") : [];
                this.__send(l.route,this.sendmsg, l.ID, l.name, k, parseInt(l.CNotify))
            } else if ("Server" === tKeys[e]) for (g = 0; g < f.length; g++) {
                l = f[g];

                if (!l.ID || !l.onmessage) throw "protocol error.";
                k = I[l.ID] = {};
                k.name = l.onmessage;
                k.parameters = l.parameters ? l.parameters.split(";") : [];
                M[k.name] = {
                    ID: l.ID,
                    item: k
                }
            } else cc.assert(!1, "protocols sub error.")
        }
        cc.log("server inited")
    },
    onfaildsend:function()
    {
        cc.assert(false,"Server--onfaildsend");
    },
    sendmsg:function()
    {
        console.log("----server sendmsg");
    },
    onmessage:function(c,i,n,r,notify,cb)
    {
        do {
            if (client.onrecv) client.onrecv(c, notify);
            var code = c.code;
            if(code !== 0 )
            {
                if(cb && cb.hasOwnProperty('e') &&(cb['e'] == "all" || k2(cb['e'],code)))
                {
                    cb.cb.apply(cb.t,[c,r])
                }
                else
                {
                    client.onservererror(c.code);
                }

            }else{
                c.ID = i;
                c.payloadName = n;
                c.timestamp = c.timestamp;
                D(c, null, r)
                if(cb && !cb.hasOwnProperty('e'))
                {
                    cb.cb.apply(cb.t,[c,r])
                }

                N(c);
            }
        } while ( 0 );
    }
});