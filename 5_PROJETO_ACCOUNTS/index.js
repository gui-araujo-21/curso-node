//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//core modules
const fs = require("fs");

//functions

const operation = ()=>{
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices:[
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
    .then((answer)=>{
        const action = answer.action;
        if(action == 'Criar Conta'){
            console.log(chalk.bgGreen.white('Parabéns por escolher nosso Banco! Seja bem vindo'));
            buildAccount();
        }else if(action === 'Consultar Saldo'){
            getAccountBalance();
        }else if(action === 'Depositar'){
            deposit();
        }else if(action === 'Sacar'){
            withdraw();

        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por utilizar o Accounts!'));
            process.exit();
        }
    })
    .catch((err)=> console.log(err));
}

const buildAccount = ()=>{
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um usuario para a sua conta:'
    }])
    .then((answer)=>{
        const accountName = answer['accountName'];

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log('Essa conta já existe! Escolha outro nome');
            buildAccount();
            return
        }

        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance":0}',
            (err) => console.log(err)
        )

        console.log('Conta cadastrada com sucesso!');
        operation();

    })
    .catch((err) => console.log(err));
}

const deposit = ()=>{
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer['accountName'];

        if(verifyAccount(accountName)){
            inquirer.prompt([{
                name: 'qntDeposit',
                message: 'Insira o valor de depósito:'
            }]).then((answer)=>{
                const amount = answer['qntDeposit'];
                addAmount(accountName, amount);
                
            }).catch((err)=> console.log(err));
        }else{
            return deposit();
        }
    }).catch((err)=> console.log(err))
    
}

const verifyAccount = (accountName)=>{
    if(fs.existsSync(`accounts/${accountName}.json`)){
        return true;
    }
    console.log(chalk.bgRed.black('Conta não encontrada, tente novamente'))
    return false;
}

const addAmount = (accountName, amount)=>{
    let accountData = getAccount(accountName);

    if(amount){
        setBalance(accountData, accountName, amount)
        console.log(chalk.green(`Depósito de R$ ${amount} realizado com sucesso!`))
        
    }else{
        console.log(chalk.bgRed.black('Ops... aconteceu um erro, tente novamente mais tarde!'))
    }

    operation();
}

const getAccountBalance = ()=>{
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer['accountName'];

        if(verifyAccount(accountName)){
             const accountData = getAccount(accountName);
             console.log(chalk.bgBlue.black(`Seu saldo é R$ ${accountData.balance}`))
        }else{
            return getAccountBalance();
        }
        operation();

    }).catch((err)=> console.log(err));

}

const getAccount = (accountName)=>{
    let dataAccount = fs.readFileSync(
        `accounts/${accountName}.json`,{
            encoding: 'utf-8',
            flag: 'r'
     })
     dataAccount = JSON.parse(dataAccount);
     return dataAccount;
}

const setBalance = (accountData, accountName, amount)=>{
    accountData['balance'] = parseFloat(accountData['balance']) + parseFloat(amount);
        accountData = JSON.stringify(accountData);
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            accountData,
            (err) => console.log(err)
        )
}

const withdraw = ()=>{
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }]).then((answer)=>{
        const accountName = answer['accountName'];

        if(verifyAccount(accountName)){
            inquirer.prompt([{
                name: 'qntWithdraw',
                message: 'Insira o valor de saque:'
            }]).then((answer)=>{
                const accountData = getAccount(accountName);
                const amount = answer['qntWithdraw'];
                if(amount){

                    if(amount > accountData.balance){
                        console.log(chalk.bgRed.black('Erro: Valor indisponível'))
                        return withdraw();
                    }else{
                        setBalance(accountData, accountName, -1*(amount));
                        console.log(chalk.green(`Saque de R$ ${amount} realizado com sucesso!`))
                    }
    
                }else{
                    console.log(chalk.bgRed.black('Ops... aconteceu um erro, tente novamente mais tarde!'))
                }
                operation();

            }).catch((err)=> console.log(err));
        }else{
            return withdraw();
        }
    }).catch((err)=> console.log(err))
}

operation();