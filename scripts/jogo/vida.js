class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidaMaxima = this.inicial;
    this.largura = 28;
    this.altura = 28;
    this.xInicial= 20;
    this.y = 20;
  }
  
  draw(){
    
    for(let i = 0; i < this.vidaMaxima; i++){
      const margem = i * 10;
      const posicaoX = this.xInicial * (i + 1);
      
      image(imagemVida, posicaoX + margem, this.y, this.largura, this.altura);
      
    }
  }
  
    ganhaVida(){
      if(this.vidaMaxima <= this.total)
        this.vidaMaxima++;
    }
    
    perdeVida(){
      this.vidaMaxima--;
    }
}