declare module "budio" {
  export type Categorie = string

  export type Transaction = {
    id: string
    title: string
    notes?: string
    amount: number
    account_id: string
    category: Categorie[]
    recurrent?: boolean
    location?: {
      lat: number
      lon: number
      direction: string
    }
    timestamp: Date
    created_at: Date
    updated_at?: Date
  }

  export type AccountType = "credit_card" | "depository" | "savings"

  export type Account = {
    id: string
    title: string
    digits: number
    balance: number
    type: AccountType
    limit?: number
    notes?: string
    created_at: Date
    updated_at?: Date
  }
}
