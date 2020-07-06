class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdPulo){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 4;
    this.alturaDoPulo = -40;
    this.qtdPulo = qtdPulo;
    this.invencivel = false;
}
  
  pula(){
    this.velocidadeDoPulo = this.alturaDoPulo; 
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
        
    if(this.y > this.yInicial){
      this.y = this.yInicial;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
          this.invencivel = false
        }, 2000);
  }
  
  estaColidindo(inimigo){
    if(this.invencivel)
      return false;
    
    const precisaoInimigoX = this.retornaPrecisaoInimigoX(inimigo);
    const precisaoInimigoY = this.retornaPrecisaoInimigoY(inimigo);
    const diametroInimigo = this.retornaDiametroInimigo(inimigo);
        
    const colisao = collideCircleCircle(this.x + 60, 
                                   this.y + 70, 
                                   85,
                                   inimigo.x + precisaoInimigoX, 
                                   inimigo.y + precisaoInimigoY, 
                                   diametroInimigo);
    
    return colisao;
  }
  
  moveParaFrente(){
    this.x = this.x + 30;
    this.verificaLimiteTela("frente");
  }
  
  moveParaTras(){
    this.x = this.x - 30;  
  }
  
  verificaLimiteTela(lado){
    if(lado === "frente"){
      if(this.x + 110 > width){
        this.x = width -110;
      }
    }
    if(lado === "tras"){
      if(this.x + 110 < width){
        this.x = 0;
      }
    }      
  }
  
  zeraPulo(){
    if(this.y == this.yInicial)
      this.qtdPulo = 0;
  }
  
  adicionaPulo(){
    this.qtdPulo++;
  }
  
  passouLimitePulo(){
    if(this.qtdPulo > 2)
        return true;
  }
  
  retornaPrecisaoInimigoX(inimigo){
    switch(inimigo.tipo){
      case 'gotinha': {
        return 40;
      } 
      case 'troll': {
        return 120;
      } 
      case 'voador': {
        return 50;
      } 
    }
  }
  
  retornaPrecisaoInimigoY(inimigo){
    switch(inimigo.tipo){
      case 'gotinha': {
        return 30;
      } 
      case 'troll': {
        return 100;
      } 
      case 'voador': {
        return 40;
      } 
    }
  }
  
  retornaDiametroInimigo(inimigo){
    switch(inimigo.tipo){
      case 'gotinha': {
        return 45;
      } 
      case 'troll': {
        return 110;
      } 
      case 'voador': {
        return 50;
      } 
    }
  }
}