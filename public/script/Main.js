window.onload = function(){
    
    game = new Phaser.Game(350,550,Phaser.CANVAS,'gameContainer');
    //game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.CANVAS,'gameContainer');
				
	//Add all states
    game.state.add("Verify", verifyState);
    game.state.add("Boot", bootState);
    game.state.add("Preload", loadState);
    game.state.add("Menu", menuState);
    game.state.add("Help", helpState);
    game.state.add("Credit", creditState);
    game.state.add("Play", playState);
    game.state.add("LeaderBoard",leaderboardState);
    game.state.add("PlayerInfo", playerInfoState);
    game.state.add("classBoard", classState);        
    
    //define global var
    game.global = {
        score: 0,
        fruitSound: null,
        flag: false,
        collideFlag: false,
        menuBgSound: null,
        gemSound: null,
        jumpSound: null,
        deadSound: null,
        cocoSound: null,
        mute: false,
        soundPlay: true,
        pltYMin: null
    }    



        //Start the first state
    game.state.start("Boot",true,false);
    
}