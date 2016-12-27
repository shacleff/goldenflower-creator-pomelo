Class({
    ClassName:"Game.Net.CHttpRequest",
    DefaultTimeOut:10000,
    onRecv:null,
    onSent:null,
    onTimeout:null,
    onError:null,
    mTimer:null,
    /*
     * p : POST GET
     * asyn : true 异步  false 同步
     * cb 异步调用 回调
     * */
    Send : function(url,vMap,target) {

        var xhr = cc.loader.getXMLHttpRequest();
        var params = "?";
        var parId = url.split("/")[3];
        var errorAy = cObj?cObj["e"]:null;
        var callfunc = cObj?cObj.cb:null;
        var target = cObj?cObj.t:null;
        for(var key in vMap)
        {
            //params.length? params+="&":params="?"
            params="{0}{1}={2}&".Format(params,key,vMap[key]);
        }
        var self = this;
        //No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:63342' is therefore not allowed access.
        url=encodeURI("{0}{1}".Format(url,params));
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState == 4 )
            {

                if(self.onRecv)
                    self.onRecv(null,0);
                if(self.mTimer)
                {
                    clearTimeout(self.mTimer);
                    self.mTimer = null;
                }
                if(xhr.status >= 200 && xhr.status <= 207)
                {
                    var obj = JSON.parse(xhr.responseText);
                    var id = obj.code;
                    if(id !=0)
                    {
                        if(errorAy != "all" && errorAy && !self.CheckError(errorAy,id))
                        {
                            Client.onservererror(id);
                        }
                        else
                        {
                            if(callfunc)
                                callfunc.call(target,obj);
                            else
                                Client.onservererror(id);
                        }
                    }
                    else
                    {
                        Server.toclient("http_" + parId + "_Res",obj,vMap);
                    }
                }
                else{
                    //cb(null);
                }
            }
        }
        if(this.onSent)
            this.onSent(null,0);
        xhr.send();
        this.mTimer = setTimeout(function()
        {
            xhr.abort();
            if(this.onTimeout)
            {
                this.onTimeout();
            }
        },this.DefaultTimeOut,this);


    },
    CheckError:function()
    {

    }
}).Static({
    Create:function()
    {
        return new this;
    }
})