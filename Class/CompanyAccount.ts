
import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

       
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (loan: number) => {
        if(this.status){
            this.balance += loan
        }
    }
}