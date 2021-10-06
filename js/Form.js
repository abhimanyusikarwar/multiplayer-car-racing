class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("play")
        this.greeting=createElement("h3")
    }
display(){
    var title=createElement('h2')
    title.html("car racing game")
    title.position(600,100);
    this.input.position(500,200)
    this.button.position(550,250)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount)
        this.greeting.html("hello "+player.name)
        this.greeting.position(550,150);
    })
}

hide(){
   this.greeting.hide();
   this.button.hide();
   this.input.hide(); 
}

}