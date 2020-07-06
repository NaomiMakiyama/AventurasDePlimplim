class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    this.fimDoJogo = false;
  }

  setup() {
    somJogo.loop();

    cenario = new Cenario(imagemCenario, 2);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270, 0);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, 30, 52, 52, 104, 104, 10, 100, 'gotinha');
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 5, 100, 'troll')
    const inimigoVoadorL1 = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 90, 200, 150, 7, 300, 'voador')
    const inimigoVoadorL2 = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 300, 100, 90, 200, 150, 7, 750, 'voador')

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoadorL1);
    inimigos.push(inimigoVoadorL2);
  }

  keyPressed(key) {
    if (key === 'ArrowUp' || !this.fimDoJogo && key === 'click') {
      personagem.adicionaPulo();
      if (!personagem.passouLimitePulo()) {
        personagem.pula();
        somDoPulo.play();
      }
    }
    if (key === 'ArrowRight') {
      personagem.moveParaFrente();
    }

    if (key === 'ArrowLeft') {
      personagem.moveParaTras();
    }
    if (this.fimDoJogo && key === 'click' ||
      this.fimDoJogo && key === 'Enter') {
      window.location.reload();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    personagem.zeraPulo();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 3) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(20, 40));
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();

      if (vida.vidaMaxima === 0){
        this._textGameOver();
        this._gameOver();
      }
    }
  }

  _botao() {
    botaoGerenciador.draw();
  }

  _gameOver() {
    image(imagemGameOver, width / 2 - 200 , height / 2 - 150);
    somJogo.stop();
    somGameOver.play();
    this.fimDoJogo = true;
    noLoop();
  }

  _textGameOver() {
    textFont(fonteTelaInicial);
    textSize(50);
    textAlign(CENTER);
    color('#FFFFFF');
    text('Voce fez '+ parseInt(pontuacao.pontos) +' pontos!', width / 2, height / 10 * 6);
     textSize(30);
    text('Pressione ENTER ou CLIQUE para', width / 2, height / 10 * 8);
    text('voltar para a tela Inicial', width / 2, height / 10 * 8.7);
  }
}