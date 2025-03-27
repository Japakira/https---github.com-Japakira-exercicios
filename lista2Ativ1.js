// Atividade 1. Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
//     das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
//     propriedades com os mesmos nomes.
//     Forneça ao protótipo/classe de Vec dois métodos, plus e minus, que recebem outro vetor como parâmetro e
//     retornam um novo vetor que contém a soma ou diferença dos valores x e y dos dois vetores (o vetor atual e o
//     parâmetro).
//     Adicione uma propriedade getter length ao protótipo que calcula o comprimento do vetor - isto é, a distância
//     do ponto (x, y) à origem (0, 0).
//     Teste sua classe criando dois objetos com new e demonstrando as saídas das operações dos métodos
//     implementados na classe.

class Vec {
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
    get distancia(){
        return sqtr(Math.abs(this.x)*Math.abs(this.x) + Math.abs(this.y)*Math.abs(this.y));
    }

    minus (){
        xm = this._x - a;
        ym = this._y - b;
        return xm, ym;
    }

    plus (a, b){
        xm = this._x + a;
        ym = this._y + b;
        return xm, ym;
    }
}

vec1 = new Vec.constructor(5,7);
vec2 = new Vec.constructor(1,3);

console.log(vec1);

console.log(vec1.minus(vec2.x, vec2.y));
console.log(vec1.plus(vec2.x, vec2.y));
console.log(vec1.distancia());
console.log(vec2.distancia());