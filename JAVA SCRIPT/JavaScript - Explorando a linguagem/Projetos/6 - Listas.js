console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //Adicionando um item na lista
console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log("Destinos possíveis");
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
