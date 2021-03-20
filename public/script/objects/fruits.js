var fruits = function(game){
    this.game = game;
    this.fruitYMin = 99999;
    this.min = 0;
    this.max = 0;
    this.x = 0;
    this.y = 0;
    this.gemsLoopTime = 15000; // 15s
    this.gemsGroup = null;
    this.booksGroup = null; // 9 books total?
    this.levelRank = 'beginner'; // default value
    this.timer_01 = null;
    this.timer_02 = null;
    this.timer_03 = null;
    this.time1 = 10000; // time beg - 10s*3 = 30 sec // line - 213 - method handleDifficulty
    this.time2 = 10000; // time inter - 10s*18 = 3 min
    this.time3 = 5000; // time expert - 5s*infinty
    this.flag = 0;
};

    fruits.prototype = {

        create: function(){
     
            var shakesArray = new Array('shake0','shake1','shake2');
            this.shakesGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);

            // total = 10

            this.shakesGroup.createMultiple(1,'shake0',null,false);
            this.shakesGroup.createMultiple(1,'shake2',null,false);
            this.shakesGroup.createMultiple(1,'shake1',null,false);
            this.shakesGroup.createMultiple(1,'shake0',null,false);
            this.shakesGroup.createMultiple(1,'shake2',null,false);
            this.shakesGroup.createMultiple(1,'shake0',null,false);       
            this.shakesGroup.createMultiple(1,'shake2',null,false);
            this.shakesGroup.createMultiple(2,'shake1',null,false);
            this.shakesGroup.createMultiple(1,'shake0',null,false);

            this.shakesGroup.callAll('anchor.setTo','anchor',0.5,0.5);
            this.shakesGroup.setAll('body.immovable',true);
            this.shakesGroup.callAll('body.setSize','body',25,25,0,2);

            
            this.fruitSound = game.add.audio('fruitGulp',1,false);
            
            Phaser.ArrayUtils.shuffle(this.shakesGroup);
            this.shakesGroup.updateZ();
            
            // gems handle
            var gemsArray = new Array('coin0','coin1','coin2', 'coin3','coin4','coin5');
            this.gemsGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            // total = 6
            this.gemsGroup.createMultiple(1,'coin0',false);
            this.gemsGroup.createMultiple(1,'coin2',false);
            this.gemsGroup.createMultiple(1,'coin1',false);
            this.gemsGroup.createMultiple(1,'coin3',false);
            this.gemsGroup.createMultiple(1,'coin4',false);
            this.gemsGroup.createMultiple(1,'coin5',false);
            
            this.gemsGroup.callAll('anchor.setTo','anchor',0.5,0.5);
            this.gemsGroup.callAll('body.setSize','body',38,40,5,2);
            this.gemsGroup.callAll('body.gravity.set','body.gravity',0,330);
            this.gemsGroup.callAll('body.bounce.set','body.bounce',0.6);
            Phaser.ArrayUtils.shuffle(this.gemsGroup);
            this.gemsGroup.updateZ();

            var booksArray = new Array('book0','book1','book2');
            this.booksGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

            // total = 9
            this.booksGroup.createMultiple(3,'book0',false);
            this.booksGroup.createMultiple(3,'book1',false);
            this.booksGroup.createMultiple(3,'book2',false);
    
            //this.booksGroup.createMultiple(5,'coconut',false);
            this.booksGroup.callAll('body.setSize','body',35,40,5,2);
            this.booksGroup.callAll('body.gravity.set','body.gravity',0,250);
            this.booksGroup.callAll('body.bounce.set','body.bounce',0.6);
            this.booksGroup.setAll('body.friction','body',0.5);
            this.booksGroup.setAll('body.mass','body',2);
            this.booksGroup.setAll('body.checkCollision.left',false);
            this.booksGroup.setAll('body.checkCollision.right',false);
            this.booksGroup.setAll('body.checkCollision.up',false);
            Phaser.ArrayUtils.shuffle(this.booksGroup);
            this.booksGroup.updateZ();
            
            game.time.events.loop(this.gemsLoopTime,this.handleGems,this); // loop to infinity
            //game.time.events.loop(this.cocoLoopTime,this.handleCoconuts,this); // loop to infinity
            
            // create timer for levelRank
            this.timer_01 = game.time.create(false);
            this.timer_02 = game.time.create(false);
            this.timer_03 = game.time.create(false);
            
            this.setTimer(); 
        },
        
        initialFruits: function(){
           var fruit;
            for(var i=1;i<=13;i++){
                fruit = this.shakesGroup.getRandom();
                var x = game.rnd.integerInRange(20,310);
                var y = game.rnd.integerInRange(20,400);
                fruit.reset(x+10,y+30);
            }
            
        },

        handleFruits: function(elem){
            if(elem.y>game.height+game.camera.y){
                elem.kill();
                this.shakesGroup.forEachDead(this.createFruits,this);
            }

        },

        createFruits: function(elem){
            
            this.min = game.camera.y;
            this.max = game.camera.y+game.height;
            this.y = game.rnd.integerInRange(this.min,this.min-300);
            this.x = game.rnd.integerInRange(20,320);                    
            Phaser.ArrayUtils.shuffle(this.shakesGroup);
            this.shakesGroup.updateZ();
            
            var tmp = this.shakesGroup.getFirstDead();
            if(tmp){
                tmp.reset(this.x,this.y-20);
            }
            return;
        },
        
        handleGems: function(){
           var rand = game.rnd.integerInRange(1,7);
          for(var i=0;i<=rand;i++){
                var gem = this.gemsGroup.getFirstDead();
                if(gem){
                //this.y = game.rnd.integerInRange(this.min,this.min-500);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);    
                this.x = game.rnd.integerInRange(20,330);
                gem.reset(this.x+3,y);
            }
          }
        },
        
        killGems: function(gem){
            if(gem.y>game.height+game.camera.y){
                gem.kill();
            }
        },
        
        handleCoconuts: function(){
    
          for(var i=0;i<=rand;i++){
                var coco = this.booksGroup.getFirstDead();
                if(coco){
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,320);
                coco.reset(this.x,y);
            }
          }
        },
        
        killCoconut: function(coco){
            if(coco.y>game.height+game.camera.y){
                coco.kill();
            }
        },
        
        setTimer: function(){
            this.timer_01.loop(this.time1,this.level_01,this);
            this.timer_02.loop(this.time2,this.level_02,this);
            this.timer_03.loop(this.time3,this.level_03,this);

            this.timer_01.start(); // start level 01
    
        },
        
        level_01: function(){

                var rand = game.rnd.integerInRange(0,13);
                var coco = this.booksGroup.getRandom();
                if(coco){
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,310);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 1');     
            }          
        },
        
        level_02: function(){
            
              var rand = game.rnd.integerInRange(1,2);
             // var rand = 2;
              for(var i=0;i<=rand;i++){
                var coco = this.booksGroup.getFirstDead();
                if(coco){
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(20,330);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 2 flag '+this.flag);  
            }
          }
            
        },
        
        level_03: function(){
            
            var rand = game.rnd.integerInRange(3,4);
              for(var i=0;i<=rand;i++){
                var coco = this.booksGroup.getFirstDead();
                if(coco){
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(20,330);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 3');  
            }
          }
        
            
        },
        
        handleDifficulty : function(flag){
            if(flag == 3){
                this.timer_01.stop();
                //this.flag = 0;
                this.timer_02.start();
            }
            else if(flag == 21){
                this.timer_02.stop();
                this.flag = 0;
                this.timer_03.start();
            }
            
        },
        
        update: function(){
             this.shakesGroup.forEachAlive(this.handleFruits,this);
             this.gemsGroup.forEachAlive(this.killGems,this);
             this.booksGroup.forEachAlive(this.killCoconut,this);
             
             this.handleDifficulty(this.flag); // manage time event   
        },

        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.shakesGroup.countLiving(),32,400);

        }
    }
