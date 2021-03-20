var leaderboardState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.nextBtn;
    this.headers = null;
    this.scoreboard_bg = null;
    
    this.style = { font: "bold 34px Arial", fill: "#fffff"}; // highscore header
    this.textStyle = { font: "bold 22px Arial", fill: "#fffff" }; // highscore and your score
    this.textStyle3 = { font: "bold 16px Arial", fill: "#fffff" }; // leaderboard headers
    this.styleTextH = { font: "bold 58px Arial", fill: "#fffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 25px Arial", fill: "#fffff", boundsAlignH: "center", boundsAlignV: "middle" }; 
    this.textStyle2 = { font: "14px Arial", fill: "#fffff"}; // leaderboard 1-5 fonts
    
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();

        this.scoreboard_bg = game.add.sprite(game.world.centerX,game.world.centerY,"scoreboard_bg");
        this.scoreboard_bg.anchor.setTo(0.5,0.5);
        this.scoreboard_bg.scale.setTo(0.45,0.45);

        this.buildInterface();
        
        this.showScore();
        
    },
    
    buildInterface: function(){
        
	//User Inteface
   
        
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
            
            var currentScore = this.add.text(this.world.centerX,260,'Pomona Leaderboard',this.textStyle);
            currentScore.anchor.setTo(0.5,0.5);


            
           this.headers= game.add.sprite(28,290,"NameYearScore");
            this.headers.anchor.setTo(0,0.5);
            this.headers.scale.setTo(0.8,0.8)


            create(this)

            async function create(this1) {
            
            result = await getTopScores();

            var y = 315
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