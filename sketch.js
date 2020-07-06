function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
    
  telaInicial = new TelaInicial();
  
  jogo = new Jogo();
  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial
  };
  
  botaoGerenciador =  new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function mouseClicked(event) {
  jogo.keyPressed('click');
}

function draw() {
  cenas[cenaAtual].draw();
}