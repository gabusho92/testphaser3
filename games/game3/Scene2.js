class Scene2 extends Phaser.Scene {
	constructor(){
		super("GamePlay");
	}
	create(){
		this.add.text(20, 20, "Play Game", {font: "25px Arial", fill: "yellow"});

  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("tiled2", "tiles");
  const test1 = map.createStaticLayer("test", tileset, 0, 0);
  const piso = map.createStaticLayer("piso", tileset, 0, 0);
  const enemy = map.createStaticLayer("enemy", tileset, 0, 0);


	const spawnPoint = map.findObject("spawn", obj => obj.name === "spawn player");
	this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "block1").setScale(0.5);

		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		piso.setCollisionByProperty({collides: true});
		test1.setCollisionByProperty({collides: true});
		enemy.setCollisionByProperty({collides: true});
		this.physics.add.collider(this.player, piso);
		this.physics.add.collider(this.player, test1, hitBomb, null, this);
		this.physics.add.collider(this.player, enemy, hitBomb, null, this);

		function hitBomb (player, enemy){
   				this.scene.start("GamePlay");
   			}


	
	    this.cameras.main.setBounds(0, 0, 3000, 400);
    	this.cameras.main.startFollow(this.player);

    	this.input.on('pointerdown', function (pointer) {
    	if (this.player.body.blocked.down){
		this.player.setVelocityY(-450);
	}
 		}, this);
	}

	update(){

		this.player.setVelocityX(200);
	
	if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
   				this.scene.start("bootGame");
	}
	

}
}