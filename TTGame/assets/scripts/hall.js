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



Gameone(event){
      cc.director.loadScene("choseone");
}

Gametwo(event){

}

Gamethree(event){
    
}


}