class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementPosition(){
    this.titleImg.position(120 , 100)
    this.input.position(width/2-120,height/2-90);
    this.playButton.position(width/2-100,height/2+50)
this.greeting.position(width/2-120,height/2-90)
    
  }

  setElementStyle(){
    this.titleImg.class("gameTitle")
this.input.class("customInput")
this.playButton.class("customButton")
this.greeting.class("greeting")  
  }
handleMousePressed(){
  this.playButton.mousePressed(()=>{
  this.input.hide();
  this.playButton.hide();
  var message =`Hello ${this.input.value()}<br/> Wait for other players to join  `
  this.greeting.html(message);
  })
}

  display(){
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
  }
}
