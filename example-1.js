// Remove lower cased chars from the string
const str = 'AasADasdASdasD'

const cleaned = str
   .split('')
   .filter(function (c) {
      return c === c.toLowerCase()
   })
   .join('')

console.log(cleaned)
