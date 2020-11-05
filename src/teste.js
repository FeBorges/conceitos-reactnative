const numeros = [1, 2, 3, 4];

const dobro = numeros.map(numeros => {
  return numeros * 2
});
console.log(dobro);

const items = 'Felipe, Eduardo, Borges';
const itemsArr = items.split(',');
console.log(itemsArr);

const nessItems = itemsArr.map(item => `<li>${item}</li>`);
console.log(nessItems);

