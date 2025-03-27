//Atividade 3. Verifique o uso de var, let e const e veja as saídas do código
//em um script. Explique o porque do resultado apresentado:

var a = 1;
let b = 2;
const c = 3;

a = 10
console.log(a);
b = 20
console.log(b);
c = 30
console.log(c);

//retorno TypeError: Assignment to constant variable. por se tratar de uma constante, ou seja,
//que não pode ser alterado.