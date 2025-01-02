import { atom, useAtom } from "jotai"
import { TransactionWithAccount } from "budio"

type Config = {
  selected: TransactionWithAccount | null
  list: TransactionWithAccount[]
  selectedIndex: number | null
}

const configAtom = atom<Config>({
  list: [],
  selected: null,
  selectedIndex: null,
})

export function useTransactions() {
  return useAtom(configAtom)
}
