/// <reference types="cypress"/>

it('Igualdade', () =>{
    const a = 2;
    expect(a).equal(2);
    expect(a).to.be.equal(2);
    expect(a).not.to.be.equal('b');
})

it('Verdadeiro', () =>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
})

it('Objeto Equalidade', () =>{
    const objeto = {
        a:1,
        b:2
    }
    expect(objeto).equal(objeto)
    expect(objeto).eq(objeto)
    expect(objeto).to.be.eq(objeto)
    expect(objeto).to.be.deep.eq({a:1, b:2})
    expect(objeto).eql({a:1, b:2})
    expect(objeto).include({a:1})
    expect(objeto).to.have.property('b', 2)
    expect(objeto).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types - Tipos', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () =>{
    const str = 'String de testes valido'

    expect(str).to.be.equal('String de testes valido')
    expect(str).to.have.length(23)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/)
    expect(str).to.match(/teste/)
    expect(str).to.match(/valido$/)
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\w+/)
    expect(str).to.match(/\D+/)
})

it('Números', () => {
    const number = 4
    const floatNumber = 5.2125

    expect(floatNumber).to.be.equal(floatNumber)
    expect(floatNumber).to.be.equal(5.2125)
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
})

//aula de verificação de asserções com .equal, .equals , deep com valores {(a + b)}, .include, .empty, Arrays, Types = tipos, Strings (valida: letras, numeros, posição de palavras, quantidade de palavras), Números.