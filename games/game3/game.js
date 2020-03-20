var config = {
	width: 400,
	height: 400,
	backgroundColor: 0x000000,
    physics: {
    	default: 'arcade',
    	arcade:  {
    		gravity: {y:1400},
    		debug: true
    	}
    },
	scene: [Scene1, Scene2]
}

var game = new Phaser.Game(config);

