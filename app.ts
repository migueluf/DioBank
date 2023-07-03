
import { PeopleAccount } from './Class/PeopleAccount'
import { CompanyAccount } from './Class/CompanyAccount'



/* 
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount) */

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Miguel', 123)
console.log(peopleAccount)

peopleAccount.deposit(150)
console.log(peopleAccount)
peopleAccount.withdraw(50)
console.log(peopleAccount.balance)


