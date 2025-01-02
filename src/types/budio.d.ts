declare module "budio" {
  import { Account as AccountModel, Transaction as TransactionModel } from "@prisma/client"

  export type Categorie = string

  export type AccountType = "credit_card" | "depository" | "savings"

  export type Account = AccountModel

  export type Transaction = TransactionModel & { Account: AccountModel }
}
