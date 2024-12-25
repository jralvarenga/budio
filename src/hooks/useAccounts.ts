import { atom, useAtom } from "jotai"
import { Account } from "budio"

type Config = {
  selected: Account | null
  list: Account[]
  selectedIndex: number | null
}

const configAtom = atom<Config>({
  list: [],
  selected: null,
  selectedIndex: null,
})

export function useAccounts() {
  return useAtom(configAtom)
}
