cc.Class({
    extends: cc.Component,

    properties: {
        
        mPercentLabel:cc.Label,
        mPercentBar:cc.ProgressBar
    },

    // use this for initialization
    onLoad: function () {
        this.mCacheString = this.mPercentLabel.string;
        this.reset();
        this.startLoad();
    },

    reset:function()
    {
        this.mCurrentPercent = 0;
        this.mTotalPercent = 100;
        this.updateBar();
        
            
    },
    updateBar:function()
    {
        var current = this.mCurrentPercent+1;
        this.mCurrentPercent = Math.min(current, this.mTotalPercent);
        this.mPercentLabel.string = this.mCacheString.Format(this.mCurrentPercent,this.mTotalPercent);
        this.mPercentBar.progress = this.mCurrentPercent/this.mTotalPercent;
        
        if(current>this.mTotalPercent)
        {
            this.complete();
        }
    },
    startLoad:function()
    {
        if(!this.m_pTimer)
            this.m_pTimer = setInterval(this.updateBar.bind(this),10,this);
    },
    complete:function()
    {
        if(!!this.m_pTimer)
        {
            clearInterval(this.m_pTimer);
            this.m_pTimer = null;
        }
    }
});
