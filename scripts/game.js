window.addEventListener("load",function() {
  var Q = window.Q = Quintus({development: true})
    .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
    .setup({
      width: 320,   //to fit devices with a screne resolution of 1280 x 720
      height: 180,
      scaleToFit: true
    }).controls().touch();

    Q.setImageSmoothing(false);

    //define scene
    Q.scene("level", function(stage){
      Q.stageTMX("level.tmx", stage);
    });

    //load assets
    Q.loadTMX("level.tmx", function(){
      Q.stageScene("level");
    });

});
     