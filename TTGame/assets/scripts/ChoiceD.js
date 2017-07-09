const {ccclass, property} = cc._decorator;

@ccclass
export default class NewScript extends cc.Component {

@property(cc.Label)
NameLabel = null;

@property(cc.Label)
IdLabel = null;

onLoad()
{
    
}


BackHall(event){
    cc.director.loadScene("hall");
}

BuildRoom(event){

    var gameChild = this.node.getChildByName("BuildRoom").getComponent(cc.Animation);

    gameChild.play('buildRoomLayer');

}

BuildRoomClose(event)
{
     var gameChild = this.node.getChildByName("BuildRoom").getComponent(cc.Animation);

    gameChild.play('buildRoomClose');
}

JoinRoom(event){
     var gameChild = this.node.getChildByName("JoinRoom").getComponent(cc.Animation);

    gameChild.play('joinRoomLayer');
}

JoinRoomClose(event)
{

}


Numbtn(event,customEventData)
{
    console.log('TTTTTTTT===========' + customEventData);
}


}