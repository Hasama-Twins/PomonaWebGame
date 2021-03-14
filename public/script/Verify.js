var verifyState = function(game){
    this.game = game;
    this.nextBtn;
    this.verifyBtn
    this.verifyCode;
    
    this.style = { font: "bold 34px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; 
    this.textStyle = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; 
    this.styleTextH = { font: "bold 58px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 25px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.textStyle2 = { font: "15px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; 
    this.incorrecttextStyle = { font: "15px Arial", fill: "#f7941d", tabs: [ 100, 300 ] }; 
    
};

verifyState.prototype = {
    
    create: function(){
        console.log('Verify State');
        game.stage.backgroundColor = '#373F6C';
        game.add.plugin(PhaserInput.Plugin);

        var label1 = this.add.text(this.world.centerX,150,'Enter your 4-digit verification code.',this.textStyle);
        label1.anchor.setTo(0.5,0.5);
        var label2 = this.add.text(this.world.centerX,175,'This code can be found in your email inbox.',this.textStyle2);
        label2.anchor.setTo(0.5,0.5);
        this.verifyCode = game.add.inputField(this.world.centerX-60, 200, {
            font: '52px Arial',
            fill: '#000000',
            fontWeight: 'bold',
            width: 120,
            height: 50,
            padding: 6,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 10,
            placeHolder: '0000',
            max: 4,
            zoom: false,
            type: PhaserInput.InputType.text
        });

        this.verifyBtn = game.add.button(this.world.centerX+5,350,'verifyBtn', this.checkCode ,this);
        this.verifyBtn.anchor.setTo(0.5,0.5);
        this.verifyBtn.input.useHandCursor = true;
    
    },

    showLeaveButton: function(){

        playerInfoState.nextBtn = game.add.button(300,game.height-40,'nextBtn',function(){
            game.state.start('Menu');
        },playerInfoState);

        playerInfoState.nextBtn.anchor.setTo(0.5,0.5);
        playerInfoState.nextBtn.scale.setTo(0.6,0.6);
        playerInfoState.nextBtn.input.useHandCursor = true;
    },

    checkCode: function(){
            if (this.verifyCode.value == "1234") {
                console.log("correct code")
                this.showLeaveButton()
            } else {
                var incorrectlabel = this.add.text(this.world.centerX,300,'Incorrect verification code',this.incorrecttextStyle);
                incorrectlabel.anchor.setTo(0.5,0.5);
        }
        
    }
    
}

