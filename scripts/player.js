Quintus.ActionPlatformerPlayer = function(Q) {

  Q.Sprite.extend("Player", {    
    init: function(p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -360,
        speed: 110,
        isJumping: false
      });
      this.add("2d, platformerControls");

      var that = this;
      // Only play audio if player jumps but wasn't already jumping
      this.on("jump", function(){
        if(!that.p.isJumping && that.p.vy < 0) {
          that.p.isJumping = true;
          Q.audio.play("jump.mp3");
        }
      });

      // When player reaches floor, set iSJumping to false
      this.on("bump.bottom", function(){
        that.p.isJumping = false;
      });
    },
    damage: function() {
      Q.stageScene("level");
    }
  });
};
