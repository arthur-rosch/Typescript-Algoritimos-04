// 1.Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.

// Calcular(100, 100);
// function Calcular(Largura: number, altura: number) {
//   let ContadorQuebras = 0;
//   const Total = Largura * altura;
//   for (let index = 1; index < Total; index++) {
//     Total / 2;
//     ContadorQuebras++;
//   }
//   return console.log(ContadorQuebras);
// }
// 2.Faça uma função que receba uma string como parâmetro, essa string pode conter
// letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
// minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
// alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
// retornar apenas minúsculas.
// function verificando(palavra: string): string {
//   let maiúsculas = palavra.replace(/[^A-Z\s]/g, ""),
//     minúsculas = palavra.replace(/[^a-z\s]/g, "");

//   if (minúsculas.length == maiúsculas.length) {
//     return palavra.toLocaleLowerCase();
//   }
//   if (minúsculas.length < maiúsculas.length) {
//     return palavra.toUpperCase();
//   }
//   if (minúsculas.length > maiúsculas.length) {
//     return palavra.toLocaleLowerCase();
//   }
// }
// console.log(verificando("artHUR"));
// 3. Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
// Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
// primeiro vence, um jogador é derrubado quando sua vida for <= 0.
// Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
// seguintes propriedades: Nome: string, Vida: number, Ataque: number.
// Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
// dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
// começar atacando.
