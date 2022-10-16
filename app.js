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
function verificando(palavra) {
    var maiúsculas = palavra.replace(/[^A-Z\s]/g, ""), minúsculas = palavra.replace(/[^a-z\s]/g, "");
    console.log(minúsculas, maiúsculas);
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
