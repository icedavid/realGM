var face=1;

cc.Class({
    extends: cc.Component,

    properties: {
        //绳子
        ropeNode:{
            default:null,
            type:cc.Node
        },

        //抓钩
        hookNode:{
            default:null,
            type:cc.Node
        }
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //初始化各节点
        this.Rope=this.ropeNode.getComponent('Rope');
        this.Hook=this.hookNode.getComponent('Hook');
        //启动运动
        this.node.active=true;

        useRopeRotate();
    },

    start () {

    },

    useRopeRotate:function(){
        var rope=this.ropeNode;
        var rote=60;         //设定可以摇摆的最大角度
        var drictive=1;     //设置方向，1为顺时针，-1为逆时针
        var y=this.hookNode.y;  //同步y轴，将绳子与抓钩位置确定
        var height=this.rope.height;
        var isPause=false;  //暂停状态判定
        this.state='rotate';    //初始设置绳子的状态为摆动

        
        this.callback=function(){
            if(this.state=='rotate'){
                this.unschedule(this.callback);
            }else{
                up.call(this);
                
            }


            switch(this.state){
                case 'down':
                    down.call(this);
                    break;
                case 'up':
                    up.call(this);
                    break;
                default:
                    roate.call(this);
            }
        }

        //0.01s启动一次回调函数
        this.schedule(this.callback,0.01);  

        //绳子上升状态
        function up(){
            var speend=this.getSpeend;
            this.ropeNode.height-=speend;
            this.hookNode.y+=speend;
            if(this.hookNode.y>=y){
                this.state='rotate';
                this.hookNode.y=y;
                this.ropeNode.height=height;
            }
        }

        //绳子下降状态
        function down(){
            var speend=10;
            this.ropeNode.height+=speend;
            this.hookNode.y-=speend;
        }

        //绳子摇摆状态
        function roate(){
            rope.rotation+=drictive;
            //角度设置
            if(rope.rotation>ropt){
                drictive=-1;
            }
            if(rope.rotation<-ropt){
                drictive=1;
            }
        }
    },


    update (dt) {

    },
});
