it('nada por hora', function () { })

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a+b


// const soma = (a) => a + a

const soma = () => 5 + 5

console.log(soma(25,30))

it('a function test...', function() {
console.log('Function', this)
})

it('an arrow function...',  () => {
    console.log('Arrow', this)
    })