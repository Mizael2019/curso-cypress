it( 'sem teste ainda', () => {

})

// **SEM promisses no callback**
// const pegavalor = callback => {
//     setTimeout(() => { 
        
//         callback (12);
//     },1000)  
// }
// const system = () => {
//     console.log('inicio');
//     pegavalor(some => {
//     console.log(`Aqui é o valor ${some}`);
//     console.log('final')
//     })
// }
// system();


// **COM promisses no callback**
const pegavalor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve (13);
        },1000)
    })
}
const system = () => {
    console.log('inicio');
    pegavalor().then(some => {
    console.log(`Aqui é o valor ${some}`);
    console.log('final')
    })
}
system();