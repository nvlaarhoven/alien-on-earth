Quintus.ActionPlatformerPlayer = function(Q) {

  Q.Sprite.extend("Player", {    
    init: function(p) {
      this._super(p, {
        sheet: "player",
        jumpSpeed: -360,
        speed: 110,
      });
      this.add("2d, platformerControls");               
    }    
  });
};
