
cc.Class({
    extends: cc.Component,

    properties: {
        btnstartgame:{
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
    },


    start () {

    },

    toMainGame:function(){
        cc.director.loadScene("MainGame");
        cc.log("Open success!");
    }

    // update (dt) {},
});
