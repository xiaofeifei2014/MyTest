const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {

@property(cc.Label)
tipLabel = null;


 //监听玩家操控
setInputControl(){
    var self = this;
     var listener = {
        event: cc.EventListener.TOUCH_ONE_BY_ONE,
        onTouchBegan: function (touches, event) {
            var target = event.getCurrentTarget();//获取事件所绑定的target
            var locationInNode = target.convertToNodeSpace(touches.getLocation());
            cc.log('locationInNode: ' + locationInNode.x);
             
                return true;
            },
            onTouchMoved: function (touches, event) {
              
            },
            onTouchEnded: function (touches, event) {
           
            },
            onTouchCancelled: function (touches, event) {
            }
        }
}

onLoad()
{
    this.setInputControl();
}


//微信登录按钮
WeixinBtn(event)
{
    cc.director.loadScene("hall");
}

//游客登录按钮
YoukeBtn(event)
{

}




}