var playerInfoState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.checkYes;
    this.crossNo;
    this.leaveBtn;
    this.playerName = null;
    this.playerYear = null;
    this.changeNameLabel = null;
    
    this.style = { font: "bold 34px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // highscore header
    this.textStyle = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // highscore and your score
    this.styleTextH = { font: "bold 58px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 25px Arial", fill: '#ffffff', boundsAlignH: "center", boundsAlignV: "middle" };
    this.textStyle2 = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // cloud storage score
    
};

playerInfoState.prototype = {
    
    create: function(){
        console.log('PlayerInfo State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();
        game.add.plugin(PhaserInput.Plugin);
        this.buildInterface()       

        if (localStorage.getItem("playerName") === null) {
            this.selectYes()
            var changeInfo = this.add.text(this.world.centerX,130,'Enter your information below',this.styleTextH2);
            changeInfo.anchor.setTo(0.5,0.5);
        } else {
            this.changeNameLabel= game.add.sprite(game.world.centerX,132,'changeNameLabel');
            this.changeNameLabel.anchor.setTo(0.5,0.5);
            this.changeNameLabel.scale.setTo(0.8,0.8)
            this.checkYes = this.game.add.button(this.world.centerX-50,190,'checkyes', this.selectYes,this);
            this.checkYes.anchor.setTo(0.5,0.5);
            this.crossNo = this.game.add.button(this.world.centerX+50,190,'crossno', this.selectNo,this);
            this.crossNo.anchor.setTo(0.5,0.5);
        }
              
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
    
            scoreText = this.add.text(5, 5, 'Player Info',this.styleTextH); 
            scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		    
            
        },

    setNameAndYear: function(){
        playerInfoState.playerName = game.add.inputField(10, 220, {
            font: '18px Arial',
            fill: '#20438f',
            fontWeight: 'bold',
            width: 250,
            padding: 6,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 4,
            placeHolder: 'Name',
            min: 2,
            max: 20,
            zoom: false,
            type: PhaserInput.InputType.text
        });
        playerInfoState.playerYear = game.add.inputField(10, 260, {
            font: '18px Arial',
            fill: '#20438f',
            fontWeight: 'bold',
            width: 150,
            padding: 6,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 4,
            placeHolder: 'Graduation Year',
            min: 4,
            max: 4,
            zoom: false,
            type: PhaserInput.InputType.text
            });

    },

    selectYes: function(){
        this.setNameAndYear()
        this.showLeaveButton(true)
    },
    selectNo: function(){
        game.state.start('LeaderBoard');
    },

    showLeaveButton: function(){

        playerInfoState.leaveBtn = game.add.button(300,game.height-40,'leaveBtn', this.checkInfo , this);
        playerInfoState.leaveBtn.input.useHandCursor = true;
        playerInfoState.leaveBtn.anchor.setTo(0.5,0.5);
        playerInfoState.leaveBtn.scale.setTo(0.6,0.6);

    },

    checkInfo: function(){
            if (playerInfoState.playerName.value.length < 2 || isNaN(playerInfoState.playerYear.value) || playerInfoState.playerYear.value.length != 4) {
            } else {
                localStorage.setItem('playerName',playerInfoState.playerName.value);
                localStorage.setItem('gradYear',playerInfoState.playerYear.value);   
                game.state.start('LeaderBoard');
        }
        
    }
    
}

