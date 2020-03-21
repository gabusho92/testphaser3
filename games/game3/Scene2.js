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
  const wallright = map.createStaticLayer("wallright", tileset, 0, 0);
  const wallleft = map.createStaticLayer("wallleft", tileset, 0, 0);


	const spawnPlayer = map.findObject("spawn", obj => obj.name === "spawn player");
	this.player = this.physics.add.sprite(spawnPlayer.x, spawnPlayer.y, "block1").setScale(0.5);
	this.player.setVelocityX(200);
	this.player.setGravityY(1400);

	const spawnRock = map.findObject("spawn", obj => obj.name === "spawn rock");
	this.rock = this.add.image(spawnRock.x, spawnRock.y, "block2").setScale(0.5);


		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		piso.setCollisionByProperty({collides: true});
		test1.setCollisionByProperty({collides: true});
		enemy.setCollisionByProperty({collides: true});
		wallright.setCollisionByProperty({collides: true});
		wallleft.setCollisionByProperty({collides: true});
		this.physics.add.collider(this.player, piso);
		this.physics.add.collider(this.player, test1, hitBomb, null, this);
		this.physics.add.collider(this.player, enemy, hitBomb, null, this);
		this.physics.add.collider(this.player, wallright, changeDir, null, this);
		this.physics.add.collider(this.player, wallleft, changeDirb, null, this);

		function hitBomb (player, enemy){
   				this.scene.start("GamePlay");
   			}
   		function changeDir (player, wall){
			this.player.setVelocityX(-200);
			if (this.player.y > 1000){
		this.player.setVelocityY(-450);
	}
   			}
   		function changeDirb (player, wall){
			this.player.setVelocityX(200);
		this.player.setVelocityY(-450);
   			}


	
	    this.cameras.main.setBounds(0, 0, 3000, 2000);
    	this.cameras.main.startFollow(this.player);
    	this.cameras.main.setZoom(2);

    	this.input.on('pointerdown', function (pointer) {
    	if (this.player.body.blocked.down){
		this.player.setVelocityY(-450);
	}
 		}, this);
	}

		moveEnemy(ship, speed){
		ship.y -=speed;
	}

	update(){
		this.moveEnemy(this.rock, 2);

		
	
	if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
		this.player.setVelocityY(-450);
	}
	

}
}
