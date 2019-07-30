

cc.Class({
    extends: cc.Component,

    properties: {
        //绳子
        rope:{
            type:cc.Node,
            default:null,
        },
        //抓钩
        hook:{
            type:cc.Node,
            default:null,
        },

        goldNode:{
            default:null,
            type:cc.Prefab
        }
    },

    onLoad () {
        //记录初始位置
        this.startPos=this.rope.position;
        //绳子开始摇摆
        this.shakeAction=cc.repeatForever(cc.sequence(cc.rotateTo(3,60),cc.rotateTo(3,-60)));
        //绳子收回，收回继续摇摆
        this.returnAction=cc.repeatForever(cc.moveTo(3,this.startPos),cc.callFunc(function(){
            this.rope.runAction(this.shakeAction);
        },this));
        //绳子左右摇摆
        this.rope.runAction(this.shakeAction);

        var self=this;

        this.node.on('touchstart',function(){
            self.rope.stopAllActions();
            self.rope.runAction(cc.moveBy(3,-200*Math.tan(Math.PI/180*this.rope.rotation),-200));
        },this);
        this.node.on('touchend',function(){
            self.rope.runAction(self.returnAction);
        },this);

        //金块设置
        var goldNode=cc.instantiate(this.goldNode);
        goldNode.parent = this.node;
        goldNode.setPosition(-200,-50);

    },

    start () {

    },

    // update (dt) {},
});
