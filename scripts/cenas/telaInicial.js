class TelaInicial{
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textSize(50);
    textAlign(CENTER);
    text('As aventuras de', width /2 , height / 5 );
     textSize(100);
    text('Plimplim', width / 2, height / 8 * 3 );
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}