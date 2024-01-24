function print() {
   let ul = document.querySelector('ul');
   for (i = 0; i < 100; i++) {
      let li = document.createElement('li');
      ul.appendChild(li)
      li.innerHTML = 'id_' + i;
   }
}

function* createGenerator() {
   let count = 0;
   yield print();
   count++;
}

const gen = createGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);