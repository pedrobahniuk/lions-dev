const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let pessoas = []
let maiorsalario 
exibirMenu()



	function exibirMenu() {
        console.log(`
        Menu:
        1. Cadastrar pessoas
        2. Listar todos os pessoas
        3. Exibir funcionário com maior salário
        4. Sair
        `)
        rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
        case '1':
            cadastrarPessoas()
        break
        case '2':
            listarPessoas()
        break
        case '3':
            exibirMaiorSalario()
        break
        case '4':
        rl.close()
        break
        default:
        console.log('Opção inválida, tente novamente.')
        exibirMenu()
        break
        }
        })
        }
    

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({
                    nome: nome,
                    cargo: cargo,
                    salario: parseFloat(salario)
                })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionarios() {
    if(funcionarios.length == 0 ) {
        console.log('nao tem nenhum funcionario cadastrado')
        exibirMenu()
    } else {
   console.log(funcionarios)
   exibirMenu()
    }
}

function exibirMaiorSalario(){
    maiorsalario = funcionarios[0]
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorsalario.salario){
            maiorsalario = funcionarios[i]
        }
    }
console.log(maiorsalario)
exibirMenu()
}
