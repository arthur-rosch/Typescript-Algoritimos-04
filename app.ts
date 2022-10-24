// 1.Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.

Calcular(100, 100);
function Calcular(Largura: number, altura: number) {
  let ContadorQuebras = 0;
  const Total = Largura * altura;
  for (let index = 1; index < Total; index++) {
    Total / 2;
    ContadorQuebras++;
  }
  return console.log(ContadorQuebras);
}
//  2.Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
function verificando(palavra: string): string {
  let maiúsculas = palavra.replace(/[^A-Z\s]/g, ""),
    minúsculas = palavra.replace(/[^a-z\s]/g, "");

  if (minúsculas.length == maiúsculas.length) {
    return palavra.toLocaleLowerCase();
  }
  if (minúsculas.length < maiúsculas.length) {
    return palavra.toUpperCase();
  }
  if (minúsculas.length > maiúsculas.length) {
    return palavra.toLocaleLowerCase();
  }
}
console.log(verificando("artHUR"));
// 3. Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.
// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.
let Lutadores: object[] = [];
let Continuar = true;

class Lutador {
  #Nome: string;
  #Vida: number;
  #Ataque: number;

  constructor(nome: string, vida: number, ataque: number) {
    this.SetNome(nome);
    this.SetVida(vida);
    this.SetAtaque(ataque);
  }

  SetNome(nome: string): string {
    return (this.#Nome = nome);
  }

  SetVida(vida: number): number {
    return (this.#Vida = vida);
  }

  SetAtaque(ataque: number): number {
    return (this.#Ataque = ataque);
  }

  GetNome(): string {
    return this.#Nome;
  }

  GetVida(): number {
    return this.#Vida;
  }

  GetAtaque(): number {
    return this.#Ataque;
  }

  Atacar(): number {
    return this.#Ataque;
  }
}

while (Continuar) {
  let Menu = prompt("1 Criar Lutadores // 2 Começar a Batalha // 3 Finalizar");

  switch (Menu) {
    case "1":
      CriarLutador();
      break;

    case "2":
      Batalha();
      break;

    case "3":
      Continuar = false;
      break;

    default:
      alert("Opção inválida");
      break;
  }
}

function CriarLutador() {
  if (Lutadores.length > 1) {
    return alert("Limite de Lutadores Atingido");
  }

  let Nome = String(prompt("Qual o Nome do Lutador ?"));
  let Vida = Number(prompt("Qual a Vida do Lutador ?"));
  let Ataque = Number(prompt("Qual o Ataque do Lutador ?"));

  let NewLutador = new Lutador(Nome, Vida, Ataque);

  Lutadores.push(NewLutador);
}

function Batalha() {
  if (Lutadores.length == 1) {
    return alert("Cadastre 2 Lutadores antes de começar uma Batalha");
  }

  let PrimeiroLutador = true;
  let Vencedor = false;
  let VencedorSorteio: object = {};
  let PerdedorSorteio: object = {};
  let Sorteio = Math.floor(10 * Math.random());

  while (PrimeiroLutador) {
    let PalpiteLutador1 = Number(prompt("Qual o PalpiteLutador1 do Lutador ?"));
    let PalpiteLutador2 = Number(prompt("Qual o PalpiteLutador2 do Lutador ?"));

    if (PalpiteLutador1 == Sorteio) {
      VencedorSorteio = Lutadores[0];
      PerdedorSorteio = Lutadores[1];
      alert(`${Lutadores[0].GetNome()} Começa primeiro`);
      PrimeiroLutador = false;
    }

    if (PalpiteLutador2 == Sorteio) {
      VencedorSorteio = Lutadores[1];
      PerdedorSorteio = Lutadores[0];
      alert(`${Lutadores[1].GetNome()} Começa primeiro`);
      PrimeiroLutador = false;
    }
  }

  console.log(`${VencedorSorteio.GetNome()} Ataca primeiro !`);

  while (Vencedor == false) {
    let AtaqueVencedor = VencedorSorteio.Atacar();
    let AtaquePerdedor = PerdedorSorteio.Atacar();

    console.log(
      `${VencedorSorteio.GetNome()} Atacou ${PerdedorSorteio.GetNome()} Ataque: ${VencedorSorteio.Atacar()} De Dano`
    );
    PerdedorSorteio.SetVida(PerdedorSorteio.GetVida() - AtaqueVencedor);
    if (VencedorSorteio.GetVida() <= 0) {
      alert(`Luta finalizada ${PerdedorSorteio.GetNome()} Venceu !`);
      Vencedor = true;
    }

    console.log(
      `${PerdedorSorteio.GetNome()} Atacou ${VencedorSorteio.GetNome()} Ataque: ${PerdedorSorteio.Atacar()} De Dano`
    );
    VencedorSorteio.SetVida(VencedorSorteio.GetVida() - AtaquePerdedor);
    if (PerdedorSorteio.GetVida() <= 0) {
      alert(`Luta finalizada ${VencedorSorteio.GetNome()} Venceu !`);
      Vencedor = true;
    }
  }
}
