var face=1;

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.active=true;
    },

    start () {

    },

    useRope(){
        
    },

   /* ropeAround(dt){
        //判断方向
        if(this.node.rotation<=-60){
            face=-1;
        }
        else if(this.node.rotation>=60){
            face=1;
        }


        if(face===-1){
            this.node.rotation+=dt*40;
        }
        else if(face===1){
            this.node.rotation-=dt*40;
        }
    },*/

    update (dt) {

    },
});
