const sample = [1, 2, 3, 4, 5]
console.log('Dizi: ', sample)

// delete operand
delete sample[1]
console.log('Dizi: ', sample)

// filter method
const filtered = sample.filter(function (item) {
   return item > 2
})

console.log('Dizi: ', filtered)
