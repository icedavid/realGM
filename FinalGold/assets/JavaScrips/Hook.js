
cc.Class({
    extends: cc.Component,

    properties: {
        hookNode:{
            default:null,
            type:cc.Node
        },
        catchitemNode:{
            default:null,
            type:cc.Node
        },
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //开启碰撞相关组件
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDebugDraw = true;

        this.Hook=this.hookNode.getComponent('Hook');
        
    },

    onCollisionEnter:function(other,self){
        alert('撞到了！');
        var objNode=this.catchitemNode;
        var objsprite=other.node.getComponent(cc.Sprite);
        objNode.getComponent(cc.Sprite).spriteFrame=objsprite.spriteFrame;
        objNode.width=other.node.width;
        objNode.height=other.node.height;
        this.objShow();
        other.node.destroy();
        // if(cc.isValid(other.node)){
        //     alert('节点已销毁');
        // }
        //other.node.destroy();
        
    },

    objShow(){
        this.catchitemNode.opacity=255;
    },

    objHide(){
        this.catchitemNode.opacity=0;
    }

    // update (dt) {},
});
