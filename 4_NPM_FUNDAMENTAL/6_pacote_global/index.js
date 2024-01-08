//baixar pacote -> global npm install -g lodash 
    //nesse caso do lodash, como usamos o require, é necessários da pasta com os arquivos, entao nesse caso não é muito util,
    //mas tem muitos pacotes executaveis que não precisam do require.
    //para baixar as pastas usamos npm link lodash 


const _ = require('lodash');

const arr = [1, 2, 2, 3, 3, 4, 4, 5];

console.log(_.uniq(arr));