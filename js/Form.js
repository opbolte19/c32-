class Form {
  constructor() 
  {
    this.input = createInput("pro in car racing")
    this.playButton = createButton("Play")
    this.titleimage = createImg("assets/title.png")
    this.greeting = createElement("h2")
    
  }



setElementsPosition()
{
this.titleimage.position(120,100)
this.input.position(width/2,height/2-50)
this.playButton.position(width/2-50,height/2-60)
this.greeting.position(width/2-50,height/2-70)

}

hide(){
this.greeting.hide()
this.playButton.hide()
this.input.hide()
}

handleMousePressed(
)
{
this.playButton.mousePressed(()=>{
this.input.hide()
this.playButton.hide()
var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message)
      

})
}
  display()
  {
this.setElementsPosition()
this.handleMousePressed()
  }

}
