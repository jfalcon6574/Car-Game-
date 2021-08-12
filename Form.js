class Form{
    contructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130,0)
        var input = createInput("name")
        var button = createButton("Play")
        var message = createElement('h3')
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(
            function (){
                input.hide()
                button.hide()
                var name = input.value()
                playerCount +=1
                player.update(name)
                player.updateCount(playerCount)
                message.html("hello! " + name)
                message.position(130,160)
                

            }
        )
    }
}
