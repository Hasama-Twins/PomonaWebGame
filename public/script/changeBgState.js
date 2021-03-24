var changeBgState = function(game){
    this.game = game;
    this.dayBtn = null;
    this.nightBtn = null;
    this.treeBtn = null;
    this.rainbowBtn = null;
    this.backBtn = null;
    this.changeBg_Bg = null;
};

    changeBgState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            
            game.global.menuBgSound.stop();

            this.changeBg_Bg = game.add.sprite(game.world.centerX,game.world.centerY,'changebg_bg');
            this.changeBg_Bg.anchor.setTo(0.5,0.5);
            this.changeBg_Bg.scale.setTo(0.45,0.45);

            this.backBtn = game.add.button(this.world.centerX-120,game.height-60,'backward',function(){
                this.game.state.start('Menu');
                },this);
                    this.backBtn.anchor.setTo(0.4,0.4);
                    this.backBtn.input.useHandCursor = true;
            
            
                this.createbuttons()

            
        },

        createbuttons: function(){
            getbg = localStorage.getItem('bg');           


            this.dayBtn= game.add.button(100,200,'daybg-sprite',this.setDayBg,this);
            if(getbg == "day"){
                this.dayBtn.frame = 1;
            }
             else{
                 this.dayBtn.frame = 0;
            }
                
            this.dayBtn.anchor.setTo(0.5,0.5);
            this.dayBtn.scale.setTo(0.55,0.55);
            this.dayBtn.input.useHandCursor = true; 


            this.nightBtn = game.add.button(100,350,'nightbg-sprite',this.setNightBg,this);
            if(getbg == "night"){
                this.nightBtn.frame = 1;
            }
                else{
                    this.nightBtn.frame = 0;
            }
            
            this.nightBtn.anchor.setTo(0.5,0.5);
            this.nightBtn.scale.setTo(0.55,0.55);
            this.nightBtn.input.useHandCursor = true; 

            
            this.treeBtn= game.add.button(game.width - 100,200,'treebg-sprite',this.setTreeBg,this);
            if(getbg == "tree"){
                this.treeBtn.frame = 1;
            }
                else{
                    this.treeBtn.frame = 0;
            }
            
            this.treeBtn.anchor.setTo(0.5,0.5);
            this.treeBtn.scale.setTo(0.55,0.55);
            this.treeBtn.input.useHandCursor = true; 



            this.rainbowBtn = game.add.button(game.width - 100,350,'rainbowbg-sprite',this.setRainbowBg,this);
            if(getbg == "rainbow"){
                this.rainbowBtn.frame = 1;
            }
                else{
                    this.rainbowBtn.frame = 0;
            }
            
            this.rainbowBtn.anchor.setTo(0.5,0.5);
            this.rainbowBtn.scale.setTo(0.55,0.55);
            this.rainbowBtn.input.useHandCursor = true; 

        },
        
        setDayBg: function(){
            this.rainbowBtn.destroy()
            this.dayBtn.destroy()
            this.nightBtn.destroy()
            this.treeBtn.destroy()

            getbg = localStorage.setItem('bg',"day");           
            this.createbuttons()
        },

        setNightBg: function(){

            this.rainbowBtn.destroy()
            this.dayBtn.destroy()
            this.nightBtn.destroy()
            this.treeBtn.destroy()

            getbg = localStorage.setItem('bg',"night");           
            this.createbuttons()
        },

        setTreeBg: function(){

            this.rainbowBtn.destroy()
            this.dayBtn.destroy()
            this.nightBtn.destroy()
            this.treeBtn.destroy()

            getbg = localStorage.setItem('bg',"tree");           
            this.createbuttons()
        },

        setRainbowBg: function(){

            this.rainbowBtn.destroy()
            this.dayBtn.destroy()
            this.nightBtn.destroy()
            this.treeBtn.destroy()

            getbg = localStorage.setItem('bg',"rainbow");           
            this.createbuttons()
        },
        

        update: function(){
           
        }
           
    }