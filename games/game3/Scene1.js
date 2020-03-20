class Scene1 extends Phaser.Scene {
	constructor(){
		super("bootGame");
	}

	preload(){
		this.load.image('block1', 'assets/block1.png');
  		this.load.image("tiles", "assets/tiled2.png");
  		this.load.tilemapTiledJSON("map", "assets/testmap2.json");

}

	create(){

		this.add.text(30, 100, "Mini Games", {fontSize: "50px", fill: "yellow"});
		this.add.text(30, 200, "Click to start game...", {fontSize: "20px "});
		    this.input.on('pointerdown', function (pointer) {
   				this.scene.start("GamePlay");
 }, this);
	}
}