declare module "budio" {
  import { Account as AccountModel, Category as CategoryModel, Transaction as TransactionModel } from "@prisma/client"

  export type Category = CategoryModel

  export type AccountType = "credit_card" | "depository" | "savings"

  export type Account = AccountModel

  export type Transaction = TransactionModel & { Account: AccountModel }
}
