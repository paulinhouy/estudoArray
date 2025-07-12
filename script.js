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


const planetasSpread = [...planetas];

const novoArray = planetasSpread.map((valor,indice) => planetasSpreadS. = indice );
console.log(planetas)
console.log(novoArray)

