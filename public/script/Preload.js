var loadState = function(game){

};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());

          var Font = "40px Arial";
            this.loadText = this.add.text(this.world.centerX,this.world.centerY,'loading ',{font: Font, fill: '#f7941d', stroke: '#ffffff', strokeThickness: 3});
          this.loadText.anchor.setTo(0.5,0.5);
          
          /*
          this.loadingBg = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbg');
          this.loadingBg.anchor.setTo(0.5,0.5);
          this.loadingBg.scale.setTo(0.5,0.5);
          
          this.loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbar');
          this.loadingBar.anchor.setTo(0.5,0.5);
          this.loadingBar.scale.setTo(0.5,1);
          this.load.setPreloadSprite(this.loadingBar);
          this.loadingBar.x = this.world.centerX - this.loadingBar.width/2;
          */
          
          // load all objcet 
          this.load.image('background','assets/bg.png');
          this.load.image('cactus','assets/cactus.png');
          this.load.image('platform','assets/platform.png');
          
          //load milkshakes
          this.load.image('shake0','assets/milkshakes/milkshake_1.png');
          this.load.image('shake1','assets/milkshakes/milkshake_2.png');
          this.load.image('shake2','assets/milkshakes/milkshake_3.png');
        
          //load books
          this.load.image('book0','assets/books/yellowbook.png');
          this.load.image('book1','assets/books/greenbook.png');
          this.load.image('book2','assets/books/redbook.png');
          this.load.image('coconut','assets/coconut.png'); // fruit.js

          // load coins
          this.load.image('coin0','assets/coins/coin_logo_1.png');
          this.load.image('coin1','assets/coins/coin_logo_2.png');
          this.load.image('coin2','assets/coins/coin_logo_3.png');
          this.load.image('coin3','assets/coins/coin_P_1.png');
          this.load.image('coin4','assets/coins/coin_P_2.png');
          this.load.image('coin5','assets/coins/coin_P_3.png');// fruit.js && play.js
          
          // load player
           this.load.spritesheet('jolly','assets/player/transpcecil.png',68,78);
          
          // load GUI
           this.load.image('play','assets/GUI/play.png');    
           this.load.image('setting','assets/GUI/setting.png');    
           this.load.image('credit','assets/GUI/credit.png');    
           this.load.image('howtoplay','assets/GUI/howToPlay.png');      
           this.load.spritesheet('sound-sprite','assets/GUI/soundSheet.png',50,50); 
           this.load.image('title-bg','assets/GUI/title_bg_new2.png');
           this.load.image('verify-bg','assets/GUI/verify_bg.png'); // Verify.js 
           this.load.image('menu-title','assets/GUI/menu-title.png');
           this.load.image('pauseBtn','assets/GUI/pause.png');  // Play.js
           this.load.image('restartBtn','assets/GUI/restart.png');  // leaderboard.js
           this.load.image('menuBtn','assets/GUI/home.png');  // leaderboard.js
           this.load.image('nextBtn','assets/GUI/next.png');
           this.load.image('backward','assets/GUI/backward.png');// credit.js
           this.load.image('resumeBtn','assets/GUI/resume.png'); // Play.js
           this.load.image('life','assets/GUI/life.png'); // Play.js
           this.load.image('credits-screen','assets/GUI/credits-screen.png'); // credit.js 
           this.load.image('checkyes','assets/GUI/yes.png'); // PlayerInfo.js 
           this.load.image('crossno','assets/GUI/quit_.png'); // PlayerInfo.js
           this.load.image('leaveBtn','assets/GUI/leave.png'); // PlayerInfo.js  
           this.load.image('verifyBtn','assets/GUI/verify.png'); // Verify.js 

           this.load.image('player_info_bg','assets/GUI/player_info.png');
           this.load.image('scoreboard_bg','assets/GUI/scoreboard.png');
           this.load.image('scoreboard2_bg','assets/GUI/scoreboard2.png');
           this.load.image('changebg_bg','assets/GUI/changebg_bg.png');
          
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            this.load.image('leftBtn','assets/GUI/left.png');  // Play.js;
            this.load.image('rightBtn','assets/GUI/right.png');  // Play.js)
           }
          
          // how to play
          this.load.image('how-to-play','assets/how-to-play.png');
          
          // sounds
          this.load.audio('fruitGulp',['sounds/fruitGulp.wav','sounds/fruitGulp.ogg','sounds/fruitGulp.mp3','sounds/fruitGulp.m4a'],true);
          this.load.audio('menuBg',['sounds/menuBg.ogg','sounds/menuBg.wav','sounds/menuBg.mp3','sounds/menuBg.m4a'],true);
          
          this.load.audio('jumpSound',['sounds/jump.wav','sounds/jump.ogg','sounds/jump.mp3','sounds/jump.m4a'],true);

          this.load.audio('gemSound',['sounds/gemSound.mp3','sounds/gemSound.wav','sounds/gemSound.ogg','sounds/gemSound.m4a'],true);
          
          this.load.audio('deadSound',['sounds/dead.mp3','sounds/dead.wav','sounds/dead.ogg','sounds/dead.m4a'],true);
          
          this.load.audio('cocoSound',['sounds/dap.mp3','sounds/dap.wav','sounds/dap.ogg','sounds/dap.m4a'],true);
          
          //labels
          this.load.image('changeNameLabel','assets/labels/changeNameLabel.png');
          this.load.image('NameYearScore','assets/labels/NameYearScoreLabel.png');
      
      },
      
      create: function(){
            
          this.sound.setDecodedCallback([ 'gemSound', 'menuBg', 'jumpSound','deadSound' ], function(){
                console.log('sounds are ready');
                this.state.start('Verify');
          }, this);
      },
      
      loadUpdate: function(){
        this.loadText.text = 'loading '+this.load.progress+'%';
          //console.log(this.load.progress);
      },
      
      update: function(){
            
      }
      
      
  }