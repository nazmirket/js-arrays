const numbers = [23, 51, 67, 24, 14, 72]

console.log('Dizi: ', numbers)

console.log('Sorted:', numbers.sort())

const people = [
   { name: 'Ahmet', age: 12 },
   { name: 'Sedat', age: 45 },
   { name: 'Osman', age: 15 },
   { name: 'Nazmi', age: 24 },
   { name: 'Emre', age: 35 },
]

// Ascending order
const asc = people.sort(function (a, b) {
   return a.age - b.age
})

// Descending
const dsc = people.sort(function (a, b) {
   return b.age - a.age
})

console.log(asc)

console.log(dsc)
