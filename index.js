const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
      { name: 'nome', message: 'Adicione seu nome' },
      { name: 'idade', message: 'Adicione sua idade' },
      { name: 'telefone', message: 'Adicione seu telefone'}
    ])

    .then((answers) => {
        const response = `O nome do usuário é ${answers.nome} ele possui ${answers.idade} e seu telefone é ${answers.telefone}`
        console.log(chalk.bgYellow.black(response))
    })

    .catch((erro) => {
    console.error('Ocorreu um erro:', erro)
  })