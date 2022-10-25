const sample = [1, 2, 3, 4, 5, 6]
console.log('\nDizi: ', sample)
console.log('Boyut: ', sample.length)

// indexes
console.log('\n0. Eleman: ', sample[0])

// pop
console.log('\npop(): ', sample.pop())
console.log('Dizi: ', sample)

// shift
console.log('\nshift(): ', sample.shift())
console.log('Dizi: ', sample)

// find
const num = sample.find(function (item) {
   return item > 3
})

console.log("\n3'den büyük eleman:", num)
console.log('Dizi: ', sample)

// slice
console.log('\nslice 0 to 3: ', sample.slice(0, 3))
console.log('Dizi: ', sample)

// splice
console.log('\nsplice 0 to 3: ', sample.splice(0, 3))
console.log('Dizi: ', sample)
