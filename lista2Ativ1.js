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
        this.x = x;
        this.y = y;
    }
    get distancia(){
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    }

    minus (vec){
        vect.x = this.x - vec.x;
        vect.y = this.y - vec.y;
        return vect;
    }

    plus (vec){
        vect = new Vec();
        vect.x = this.x + vec.x;
        vect.y = this.y + vec.y;
        return vect;
    }
}

vec1 = new Vec(3,4);
vec2 = new Vec(9,12);
vect = new Vec(null,null);

console.log(vec1.minus(vec2));
console.log(vec1.plus(vec2));
console.log(vec1.distancia);
console.log(vec2.distancia);