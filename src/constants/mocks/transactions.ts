import { Transaction } from "budio";
import { ACCOUNT } from "./accounts";

export const TRANSACTIONS_LIST: Transaction[] = [
  {
    id: "728ed52f112",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["💰 Emergencies"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Medicinas",
    notes: "Medicinas que compre para cuando estaba enfermo"
  },
  {
    id: "vhwouhuovw212ww",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["🚀 Salida"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Cena cumpleaños",
    location: {
      lat: 9.18902801,
      lon: -101.190212,
      direction: 'El pomodoro, Santa Tecla'
    }
  },
  {
    id: "cwicrwibncr21ssqq",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Phone"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Testing 3",
  },
  {
    id: "dnjkd3bidbeyubu31wwwq",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Subscriptions"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Netflix",
    recurrent: true
  },{
    id: "728ed52fe2swsw",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["💰 Emergencies"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Medicinas",
    notes: "Medicinas que compre para cuando estaba enfermo"
  },
  {
    id: "vhwouhuovwcdwdcw",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["🚀 Salida"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Cena cumpleaños",
    location: {
      lat: 9.18902801,
      lon: -101.190212,
      direction: 'El pomodoro, Santa Tecla'
    }
  },
  {
    id: "cwicrwibncr",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Phone"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Testing 3",
  },
  {
    id: "dnjkd3bidbeyubu3",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Subscriptions"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Netflix",
    recurrent: true
  },{
    id: "728ed52f",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["💰 Emergencies"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Medicinas",
    notes: "Medicinas que compre para cuando estaba enfermo"
  },
  {
    id: "vhwouhuovw",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["🚀 Salida"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Cena cumpleaños",
    location: {
      lat: 9.18902801,
      lon: -101.190212,
      direction: 'El pomodoro, Santa Tecla'
    }
  },
  {
    id: "cwicrwibncr",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Phone"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Testing 3",
  },
  {
    id: "dnjkd3bidbeyubu3",
    amount: 100,
    account_id: ACCOUNT.id,
    categories: ["📱 Subscriptions"],
    created_at: new Date(),
    timestamp: new Date(),
    title: "Netflix",
    recurrent: true
  }
]

export const TRANSACTION = TRANSACTIONS_LIST[0]