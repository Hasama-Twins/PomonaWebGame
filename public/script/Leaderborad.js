var leaderboardState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.nextBtn;
    this.headers = null;
    
    this.style = { font: "bold 34px Arial", fill: "#ffffff"}; // highscore header
    this.textStyle = { font: "bold 22px Arial", fill: "#ffffff" }; // highscore and your score
    this.textStyle3 = { font: "bold 16px Arial", fill: "#ffffff" }; // leaderboard headers
    this.styleTextH = { font: "bold 58px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 25px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" }; 
    this.textStyle2 = { font: "14px Arial", fill: "#ffffff"}; // leaderboard 1-5 fonts
    
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();


        this.buildInterface();
        
        this.showScore();
        
    },
    
    buildInterface: function(){
        
	//User Inteface
		var bar = this.add.graphics();
	    bar.beginFill(0xf7941d);
	    bar.drawRect(0, 0, this.game.width, 75);
	    bar.endFill();

	    bar.beginFill(0x20438f, 1);
	    bar.drawRect(0, 75, this.game.width, 10);
	    bar.endFill();        

	    bar = this.add.graphics();
	    bar.beginFill(0xfbc98e, 1);
	    bar.drawRect(0, 85, this.game.width, 10);
	    bar.endFill();        

		var barBottom = this.add.graphics();
	    barBottom.beginFill(0xfbc98e, 1);
	    barBottom.drawRect(0, this.game.height - 100, this.game.width, 95);
	    barBottom.endFill();        

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0x20438f, 1);
	    barBottom.drawRect(0, this.game.height - 90, this.game.width, 90);
	    barBottom.endFill();    

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0xD8fa1c7, 1);
	    barBottom.drawRect(0, this.game.height - 80, this.game.width, 80);
	    barBottom.endFill();

	    scoreText = this.add.text(5, 5, 'Scoreboard',this.styleTextH); 
		scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		    
        
        this.nextBtn = game.add.button(300,game.height-40,'nextBtn',function(){
        this.game.state.start('classBoard');
        },this);

        this.nextBtn.anchor.setTo(0.5,0.5);
        this.nextBtn.scale.setTo(0.6,0.6);
        this.nextBtn.input.useHandCursor = true;
        
    },
     
        showScore: function(){
        var playerScore;

            var name = localStorage.getItem("playerName")
            var year = localStorage.getItem("gradYear")
            saveScore(name, game.global.score, year )
            if(localStorage.getItem('highscore')===null){
                localStorage.setItem('highscore',game.global.score);
            }
            else if(game.global.score>localStorage.getItem('highscore')){
                  localStorage.setItem('highscore',game.global.score);        
            }
                    
                playerScore = this.add.text(this.world.centerX,150,'Your Highscore - '+localStorage.getItem('highscore'),this.textStyle);
                playerScore.anchor.setTo(0.5,0.5);
            
            var currentScore = this.add.text(this.world.centerX,190,'Your New Score - '+game.global.score,this.textStyle);
            currentScore.anchor.setTo(0.5,0.5);
            
            var currentScore = this.add.text(this.world.centerX,240,'Pomona Leaderboard',this.textStyle);
            currentScore.anchor.setTo(0.5,0.5);


            
           this.headers= game.add.sprite(28,270,"NameYearScore");
            this.headers.anchor.setTo(0,0.5);
            this.headers.scale.setTo(0.8,0.8)


            create(this)

            async function create(this1) {
            
            result = await getTopScores();

            var y = 295
            for (let i = 0; i < 5; ++i)
	        {
            if (i < result.length) {
            var topName = result[i].name;
            var topScore =  String(result[i].score);
            var topYear = result[i].year
            
            if (topName != null) {
            var topNameLabel = this1.add.text(15,y,String(i+1)+". "+topName,this1.textStyle2);
            topNameLabel.anchor.setTo(0, 0.5); }

            if (topYear != null) {
            var topYearLabel = this1.add.text(190,y,topYear,this1.textStyle2);
            topYearLabel.anchor.setTo(0, 0.5);
            }

            if (topScore != null) {
            var topScoreLabel = this1.add.text(247,y,topScore,this1.textStyle2);
            topScoreLabel.anchor.setTo(0, 0.5); }

            } else{
                var topNameLabel = this1.add.text(15,y,String(i+1)+". N/A",this1.textStyle2);
            topNameLabel.anchor.setTo(0, 0.5);
            }
            y += 25 
        }
    
        }
    }
}