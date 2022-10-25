const numbers = [43, 26, 84, 11, 92]

console.log('Dizi: ', numbers)

// sum
const sum = numbers.reduce(function (a, b) {
   return a + b
}, 0)

console.log('Toplam: ', sum)

// avg
console.log('Ortalama: ', sum / numbers.length)
