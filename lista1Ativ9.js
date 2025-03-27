//Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função que as receba como parâmetro.
// A função deve mostrar o valor resultante:

console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6

function add(a, b){
    return a+b;
}

function multiply(a, b){
    return a*b;
}

function executeFunction(ope, a, b){
    if (ope == add){
        return add(a,b);
    }
    if (ope == multiply){
        return multiply(a,b);
    }
};
