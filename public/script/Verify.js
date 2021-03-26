var verifyState = function(game){
    this.game = game;
    this.nextBtn;
    this.verifyBtn
    this.verifyCode;
    this.verifyBg = null;
    
    this.style = { font: "bold 34px Arial", fill: "#ffffff", tabs: [ 100, 300 ] }; 
    this.textStyle = { font: "13px Arial", fill: "#fffff", tabs: [ 100, 300 ] }; 
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

        this.verifyBg = game.add.sprite(game.world.centerX,game.world.centerY,'verify-bg');
        this.verifyBg.anchor.setTo(0.5,0.5);
        this.verifyBg.scale.setTo(0.45,0.45);

        var label1 = this.add.text(this.world.centerX,165,'Enter your 4-digit verification code.',this.textStyle);
        label1.anchor.setTo(0.5,0.5);
        var label2 = this.add.text(this.world.centerX,180,'This code can be found in your email inbox.',this.textStyle);
        label2.anchor.setTo(0.5,0.5);
        this.verifyCode = game.add.inputField(this.world.centerX-60, 200, {
            font: '50px Arial',
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

    checkCode: function(){
            if (this.verifyCode.value == "1887") {
                console.log("correct code")
                game.state.start('Menu');
            } else {
                var incorrectlabel = this.add.text(this.world.centerX,300,'Incorrect verification code',this.incorrecttextStyle);
                incorrectlabel.anchor.setTo(0.5,0.5);
        }
        
    }
    
}

