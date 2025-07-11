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
