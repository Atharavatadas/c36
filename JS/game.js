class Game {
    constructor() {

    }
    getState() {
        var gsref = database.ref('gameState')
        gsref.on("value", function(data){
           gameState = data.val()
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }
   async start() {
        if(gameState === 0) {
            player = new Player()
            var pcref = await database.ref('playerCount').once("value")
            if(pcref.exists()) {
                playerCount = pcref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    }
    play() {
        form.hide()
        textSize(30)
        text("Game Started",120,100)
        Player.getPlayerInfo()
        if(allPlayers !== undefined) {
            var Ypos = 130
            for(var plr in allPlayers){
               Ypos = Ypos+20
               if(plr === "player" + player.index) {
                   fill ("red")
               }
               else {
                   fill ("blue")
               }
               textSize(15)
               text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,Ypos)
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null) {
                player.distance+=50
                player.update()
        }
    }
}