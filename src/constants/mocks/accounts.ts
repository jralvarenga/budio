import { Account } from "budio";

export const ACCOUNTS: Account[] = [
  {
    amount: 1000,
    digits: 1234,
    created_at: new Date(),
    id: "de2ig8e27d23cwdbi",
    limit: 1500,
    name: "Credit Name 1",
    type: 'credit_card'
  },
  {
    amount: 2000,
    digits: 4324,
    created_at: new Date(),
    id: "wuecwy8cwnouce",
    limit: 2500,
    name: "Credit Name 1",
    type: 'credit_card'
  },
  {
    amount: 1000,
    digits: 1234,
    created_at: new Date(),
    id: "de2ig8e27d23y9x1398",
    name: "Savings Name 1",
    type: 'savings'
  },
  {
    amount: 2000,
    digits: 4324,
    id: "wuecwy8x198129nx",
    created_at: new Date(),
    limit: 2500,
    name: "Savings Name 1",
    type: 'savings'
  },
  {
    amount: 1000,
    digits: 1234,
    created_at: new Date(),
    id: "de2ig8e27d23xw1inop",
    name: "Depo Name 1",
    type: 'depository'
  },
  {
    amount: 2000,
    digits: 4324,
    created_at: new Date(),
    id: "wuecwy8xw10i10",
    name: "Depo Name 1",
    type: 'depository'
  },
]

export const ACCOUNT = ACCOUNTS[0]