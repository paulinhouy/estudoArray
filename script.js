let  array = ['paulo','jose','santos']
array.push('ola');
console.log(array)
let novo = [...array];
novo.pop()
console.log(novo)

let  filterArray = [1,2,3,40,50,100,20,40,50];

const novoFilter = filterArray.filter ((num) => num >= 10 )
console.log(filterArray)
console.log(novoFilter)



//outro exemplos,palavras com mais de 4 letras

const palavras = ['sol', 'lua', 'planeta', 'estrela', 'céu'];

// Crie um array com palavras que tenham mais de 4 letras.

const novasPalavras =  palavras.filter ((palavra) => palavra.length > 4 )
console.log(novasPalavras)


//usando Map

const planetas = {
  0: 'sol',
  1: 'lua',
  2: 'planeta',
  3: 'estrela',
  4: 'céu'
};
const planetasArray = Object.values(planetas);

let novoArray = planetasArray.map((valor,indice) => {
    return {
        id:indice ,
        nome:valor
    }


});
console.log(planetas)


//map numeros em dobro

const number =  [1,10,50,100,500]
const spreadNumber  = [...number];

const mapNumber = spreadNumber.map((valor) => valor *  2)
console.log(mapNumber)

//nomes com letras maiusculas

const nomes = ['paulo', 'maria', 'joão'];

const arrayCopia = nomes.map((valor)=> {
return valor.toLocaleUpperCase();
})

console.log(arrayCopia)





// Criar array de objetos
// Dado:
const frutas = ['maçã', 'banana', 'laranja'];

const copiaFrutas = [...frutas]
const newFrutas = copiaFrutas.map((valor,indice) => {
    return {
        id:indice,
        nome:valor
    }
})
console.log(frutas);
console.log(newFrutas);



//Somar valor fixo a cada item
const precos = [10, 20, 30];
const copiaprecos = [...precos];
const newprecos = copiaprecos.map((valor) => {
    return
})

