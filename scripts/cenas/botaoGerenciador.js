class BotaoGerenciador{
  constructor(texto, posicaoX, posicaoY){
    this.texto = texto;
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;    
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-iniciar');
  }
  
  draw(){
    this.botao.position(this.posicaoX, this.posicaoY);
    this.botao.center();
  }
  
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}