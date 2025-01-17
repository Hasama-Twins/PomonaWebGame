var background = function(game){
    
};


    background.prototype = {
        
        create: function(){

            getbg = localStorage.getItem('bg');
            if (getbg == "night"){
                this.bg = game.add.sprite(game.world.centerX,game.world.centerY,'night_background');
            } else if (getbg == "rainbow") {
                this.bg = game.add.sprite(game.world.centerX,game.world.centerY,'rainbow_background');
            } else if (getbg == "tree") {
                this.bg = game.add.sprite(game.world.centerX,game.world.centerY,'tree_background');
            } else{
                this.bg = game.add.sprite(game.world.centerX,game.world.centerY,'day_background');
            }
            
            this.bg.anchor.setTo(0.5,0.5);
            this.bg.fixedToCamera = true;
            
            // cactus
            this.cactus = game.add.sprite(175,525,'cactus');
            this.cactus.fixedToCamera = true;
            this.cactus.anchor.setTo(0.5,0.5);
            game.physics.arcade.enable(this.cactus);
            this.cactus.body.setSize(330,30,5,20);
            this.cactus.body.immovable = true;
        },
        
        render: function(){
            game.debug.body(this.cactus);
        }
    }

