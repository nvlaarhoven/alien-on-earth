Quintus.ActionPlatformerDiamand = function(Q) {

  Q.Sprite.extend("Diamand", {
    init: function(p) {
      this._super(p, { sheet: "power", gravity: 0 });
      this.add("2d");

      //When Player bumps into Diamand, player wins
      this.on("bump.left, bump.right, bump.bottom, bump.top", function(collision){
        console.log('you win!');
        if(collision.obj.isA("Player")) {
          //make the player jump
          collision.obj.p.vy = -100;

          //play sound
          Q.audio.play('coin.mp3');

          //remove diamand
          this.destroy();

          //finish level
          collision.obj.win();
        }
      });
    }
  });

};
