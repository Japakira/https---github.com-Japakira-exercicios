// Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
// de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
// apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
// propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
// Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
// propriedades devem ser comparadas, você pode usar o operador typeof.
// Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
// Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
// também produz "object".

class Car{
    marca;
    modelo;
    motor;
}

carro1 = new Car('Honda', 'Fit', 1.4);
carro2 = new Car('Hyundai', 'HB20', 1.0);
carro3 = new Car('Honda', 'Fit', 1.4);

    if ((typeof(carro1)==Object)&&typeof(carro2)==Object){
        if(carro1 != null&&carro2 != null)
            deepEqual(carro1, carro2);
    }

    if ((typeof(carro1)==Object)&&typeof(carro3)==Object){
        if(carro1 != null&&carro3 != null)
            deepEqual(carro1, carro3);
    }

function deepEqual(obj1, obj2){
    if((obj1.marca === obj2.marca)&&(obj1.modelo === obj2.modelo)&&(obj1.motor === obj2.motor))
        return true;
}

if (deepEqual(obj1, obj2)==true){
    console.log('Objetos idênticos!');
}
else{
    console.log('Objetos diferentes!');
}