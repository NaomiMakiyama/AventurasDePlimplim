class Pontuacao{
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textFont(fonteTelaInicial);
    textSize(50);
    fill('#ffffff');
    textAlign(RIGHT);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
  }
}