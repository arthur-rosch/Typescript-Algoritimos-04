// 1.Faça uma função que receba dois parâmetros do tipo número que representa o
// tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
// barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
// necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Lutador_Nome, _Lutador_Vida, _Lutador_Ataque;
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
var lutadores = [];
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        _Lutador_Nome.set(this, void 0);
        _Lutador_Vida.set(this, void 0);
        _Lutador_Ataque.set(this, void 0);
        this.setNome(nome);
        this.setVida(vida);
        this.setAtaque(ataque);
    }
    Lutador.prototype.setNome = function (nome) {
        __classPrivateFieldSet(this, _Lutador_Nome, nome, "f");
    };
    Lutador.prototype.setVida = function (vida) {
        __classPrivateFieldSet(this, _Lutador_Vida, vida, "f");
    };
    Lutador.prototype.setAtaque = function (ataque) {
        __classPrivateFieldSet(this, _Lutador_Ataque, ataque, "f");
    };
    Lutador.prototype.getNome = function () {
        return __classPrivateFieldGet(this, _Lutador_Nome, "f");
    };
    Lutador.prototype.getVida = function () {
        return __classPrivateFieldGet(this, _Lutador_Vida, "f");
    };
    Lutador.prototype.getAtaque = function () {
        return __classPrivateFieldGet(this, _Lutador_Ataque, "f");
    };
    return Lutador;
}());
_Lutador_Nome = new WeakMap(), _Lutador_Vida = new WeakMap(), _Lutador_Ataque = new WeakMap();
var lutador = new Lutador("Arthur", 10, 2), lutador02 = new Lutador("War", 11, 2);
lutadores.push(lutador, lutador02);
console.log(lutadores[0].getNome());
