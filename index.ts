//Criação do DioBank
//Criar Conta
//Consultar Saldo da Conta
//Depositar na Conta
//Sacar da Conta
//Encerrar Conta

interface IConta {
    nomeTitular: string,
    saldo?: number
}

class Conta {
    private nomeTitular: string
    private saldo: number
    private ativo: boolean = true

    constructor({
        nomeTitular,
        saldo = 0
    }: IConta) {
        this.nomeTitular = nomeTitular,
            this.saldo = saldo
        console.log(`Bem-vindo(a) ao DioBank, ${this.nomeTitular}!`)
    }

    meuSaldo = (): number => {
        return this.saldo
    }

    depositar = (valor: number): void | boolean => {
        if(!this.ativo){
            console.log('Conta desativada. Impossível realizar qualquer atividade.')
            return this.ativo
        }
        this.saldo = this.saldo + valor
        console.log(`Você depositou ${valor}, seu novo saldo é ${this.saldo}`)
    }

    sacar = (valor: number): boolean => {
        if(!this.ativo){
            console.log('Conta desativada. Impossível realizar qualquer atividade.')
            this.ativo
        }

        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor
            console.log(`Você sacou ${valor}, seu novo saldo é ${this.saldo}`)
            return this.ativo
        }

        console.log(`Saldo insuficiente. Você quer sacar ${valor}. Seu saldo atual é ${this.saldo}`)
        return this.ativo
    }

    cancelarConta = () => {
        if(this.saldo ==0){
            this.ativo = false
            console.log('Conta desativada. :/')
            return this.ativo
        }

        console.log (`Impossível desativar conta de ${this.nomeTitular}, pois ainda há um saldo de ${this.saldo} nela.`)
    }
}

const contaA: Conta = new Conta({ nomeTitular: 'Kayro' })

// contaA.depositar(1000)
// console.log('Depois do depósito:',contaA.meuSaldo())

// contaA.sacar(5000)
// console.log('Depois de sacar:', contaA.meuSaldo())

contaA.cancelarConta()

contaA.depositar(100)