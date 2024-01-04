//try catch: uma forma de EVIDENCIAR algo que deu ERRADO em um bloco de código e exibir a mensagem de erro.
const x = 10;

try{
    x = 2; //Não é possivel pois x foi declarado como uma variavel Constante
    console.log('x foi alterado')

}catch(err){
    console.log('Erro: ', err) //Logo, o código entrará no catch e retornando o tipo de erro;
}