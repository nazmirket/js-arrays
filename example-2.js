// Turn following rgb values to hex
const colors = [
   { r: 120, g: 100, b: 0 },
   { r: 200, g: 100, b: 60 },
   { r: 50, g: 65, b: 50 },
]

const hexCodes = colors.map(function (color) {
   return [
      '#',
      color.r.toString(16),
      color.g.toString(16),
      color.b.toString(16),
   ].join('')
})

console.log(hexCodes)
