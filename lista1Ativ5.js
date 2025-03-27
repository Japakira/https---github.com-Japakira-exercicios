// Atividade 5. Verifique as comparações a seguir com os operadores == e ===.
// Qual será a saída para cada um deles? Teste em um script para ver se acertou:
// 5 == "5" -> True pois compara valores e não tipos
// 5 === "5" -> False pois o operador +++ compara tipos diferentes e trata-se de um int e uma String
// 5 == 5 -> True pois tem valor igual
// 5 === 5 -> True pois são de valores e tipos iguais.

console.log(Boolean(5 == "5"));
console.log(Boolean(5 === "5"));
console.log(Boolean(5 == 5));
console.log(Boolean(5 === 5));