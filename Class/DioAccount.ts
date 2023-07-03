export abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (add: number) => {
        if (this.accountStatus()){
            this.balance += add
            console.log('Deposito realizado com sucesso!')
        }else{
            console.log('Conta com status desabilitado! ')
        }
        
    }

    withdraw = (pop: number) => {
        if(this.accountStatus() && pop <= this.balance){
            this.balance -= pop
            console.log('Saque realizado!')
        }else{
            console.log('Conta com staus inativo!')
        }
    }

    getBalance = () => {
        console.log(this.balance)
    }

    setName = (name:string): void =>{
        this.name = name
        console.log('nome alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    private accountStatus = () => {
        if (this.status){
            return this.status = true
        }
    }


}