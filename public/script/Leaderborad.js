var leaderboardState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.restartBtn;
    this.menuBtn;
    
    this.style = { font: "bold 34px Arial", fill: "#fff", tabs: [ 100, 300 ] };
    this.textStyle = { font: "28px Comic Sans MS",stroke: '#ffffff', strokeThickness: 4, fill: "#BE5446", tabs: [ 100, 300 ] };
    this.styleTextH = { font: "bold 58px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 36px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.textStyle2 = { font: "12px Comic Sans MS",stroke: '#ffffff', strokeThickness: 2, fill: "#BE5446", tabs: [ 100, 300 ] };
    
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();
        

        function setNameAndYear(){
            function playerName() {
                var name = prompt("Please enter your name: ");
                if (name == "" || name == null) {
                    playerName();
                } else{
                    localStorage.setItem("playerName", name);
                }
            }
            playerName();
        
            function gradYear() {
                var year = prompt("Please enter your graduation year: ");
                if (year == "" || isNaN(year) || year == null) {
                    gradYear(); 
                } else {
                    localStorage.setItem("gradYear", year);
                }
            } gradYear();
                   
        }

        if (localStorage.getItem("playerName") === null) {
            setNameAndYear()
        } else {

            function changeDataRequired() {
                var changeData = prompt("Update name or graduation year? (Y/N): ");
                if (changeData == "" || changeData == null || (changeData.toUpperCase() != "Y" && changeData.toUpperCase() != "N")) {
                    changeDataRequired();
                } else {
                if (changeData.toUpperCase() == "Y") {
                setNameAndYear()
                } 
                }
            } 
        changeDataRequired(); 
    }

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

	    scoreText = this.add.text(5, 5, 'Highscore',this.styleTextH); 
		scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		    
                   
        this.restartBtn = game.add.button(60,game.height-40,'restartBtn',function(){
        this.game.state.start('Play');
        },this);

        this.restartBtn.anchor.setTo(0.5,0.5);
        this.restartBtn.scale.setTo(0.5,0.5);
        this.restartBtn.input.useHandCursor = true;
        
        this.menuBtn = game.add.button(300,game.height-40,'menuBtn',function(){
        this.game.state.start('Menu');
        },this);

        this.menuBtn.anchor.setTo(0.5,0.5);
        this.menuBtn.scale.setTo(0.8,0.8);
        this.menuBtn.input.useHandCursor = true;
        
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
                    
                playerScore = this.add.text(this.world.centerX,180,'Highscore - '+localStorage.getItem('highscore'),this.textStyle);
                playerScore.anchor.setTo(0.5,0.5);
            
            var currentScore = this.add.text(this.world.centerX,250,'Your Score - '+game.global.score,this.textStyle);
            currentScore.anchor.setTo(0.5);
            

            create(this)

            async function create(this1) {
            
            result = await getTopScores();

            console.log(result)
            var topName = result[0].name;
            var topScore =  String(result[0].score);
            console.log(topName,topScore,"1"); 


            console.log(topName,topScore,2)
            var topScoreLabel = this1.add.text(this1.world.centerX,250,'Top Score - '+topName+" - "+topScore,this1.textStyle2);
            topScoreLabel.anchor.setTo(0.5,-0.5);
            }
            
    
        }
}