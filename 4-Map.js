const people = [
   { name: 'Ali' },
   { name: 'Ahmet' },
   { name: 'Hasan' },
   { name: 'Merve' },
]

console.log('Dizi: ', people)

// map
const messages = people.map(function (person) {
   return `Merhaba, ${person.name}`
})

console.log('Dizi: ', messages)
