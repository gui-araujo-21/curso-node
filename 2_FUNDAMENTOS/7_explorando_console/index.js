//mais de um valor
const x = 10;
const y = 'Joao';
const z = [1,5,12];

console.log(x,y,z);


//contagem de impressões
console.count(`O nome dele é ${y}, contando`) //1
console.count(`O nome dele é ${y}, contando`) //2
console.count(`O nome dele é ${y}, contando`) //3
console.count(`O nome dele é ${y}, contando`) //4


//variavel entre string
console.log('O nome dele é %s', y); //%s identifica uma variavel string


//limpar o console
setInterval(()=>{
    console.clear();
},2000)