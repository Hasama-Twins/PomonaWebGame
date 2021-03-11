var playerInfoState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.checkYes;
    this.crossNo;
    this.leaveBtn;
    this.playerName = null;
    this.playerYear = null;
    
    this.style = { font: "bold 34px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // highscore header
    this.textStyle = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // highscore and your score
    this.styleTextH = { font: "bold 58px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 25px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.textStyle2 = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; // cloud storage score
    
};

playerInfoState.prototype = {
    
    create: function(){
        console.log('PlayerInfo State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();
        game.add.plugin(PhaserInput.Plugin);
                   

        if (localStorage.getItem("playerName") === null) {
            this.selectYes()
        } else {
            var changeInfo = this.add.text(this.world.centerX,50,'Do you want to change your',this.textStyle);
            changeInfo.anchor.setTo(0.5,0.5);
            var changeInfo = this.add.text(this.world.centerX,100,'name or graduation year?',this.textStyle);
            changeInfo.anchor.setTo(0.5,0.5);
            this.checkYes = this.game.add.button(this.world.centerX-50,150,'checkyes', this.selectYes,this);
            this.checkYes.anchor.setTo(0.5,0.5);
            this.checkYes.scale.setTo(0.1,0.1);
            this.crossNo = this.game.add.button(this.world.centerX+50,150,'crossno', this.selectNo,this);
            this.crossNo.anchor.setTo(0.5,0.5);
            this.crossNo.scale.setTo(0.08,0.08);
        }
              
    },

    setNameAndYear: function(){
        playerInfoState.playerName = game.add.inputField(10, 190, {
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
        playerInfoState.playerYear = game.add.inputField(10, 230, {
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

        playerInfoState.leaveBtn = game.add.button(this.world.centerX-30,game.height-200,'leaveBtn', this.checkInfo , this);
        playerInfoState.leaveBtn.scale.setTo(0.8,0.8);
        playerInfoState.leaveBtn.input.useHandCursor = true;
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

