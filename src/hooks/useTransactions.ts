import { atom, useAtom } from "jotai"
import { Transaction } from "budio"

type Config = {
  selected: Transaction | null
  list: Transaction[]
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
