console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //Removendo um item
// } else if (estaAcompanhado) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Não é maior de idade e não posso vender");
// }

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhado == true) {
  console.log("Indo ao embarque");
  listaDeDestinos.splice(1, 1); //Removendo um item
} else {
  console.log("Não é maior de idade e não posso vender");
}

console.log("Embarcando: \n\n");
if (
  (idadeComprador > 18 || estaAcompanhado == true) &&
  temPassagemComprada == true
) {
  console.log("Boa viagem!!");
} else {
  console.log("Você não pode embarcar!!");
}
console.log(listaDeDestinos);
