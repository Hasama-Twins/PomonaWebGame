var changeBgState = function(game){
    this.game = game;
    this.dayBtn = null;
    this.nightBtn = null;
    this.treeBtn = null;
    this.rainbowBtn = null;
    this.leaveBtn = null;
    this.changeBg_Bg = null;
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            
            this.changeBg_Bg = game.add.sprite(game.world.centerX,game.world.centerY,'changebg_bg');
            this.changeBg_Bg.anchor.setTo(0.5,0.5);
            this.changeBg_Bg.scale.setTo(0.45,0.45);

            
        
            
        },
        
        
        
        update: function(){
           
        }
           
    }