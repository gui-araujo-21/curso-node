//Objetivo da aula: mostrar o tipo de arquitetura do Node, que garante a execução/loop do código de cima para baixo

function a(){
    console.log('Executando a()')
}

function b(){
    console.log('Executando b()')
}

function c(){
    console.log('Executando c()')
    b()
    a()

}

c()