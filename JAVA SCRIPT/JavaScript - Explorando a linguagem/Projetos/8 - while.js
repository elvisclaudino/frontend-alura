console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
let destinoNaoExiste = false;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe:", destinoExiste);
if (podeComprar && destinoExiste) {
  console.log("Boa viagem!!");
} else {
  console.log("Desculpe, tivemos um erro!");
}