import { atom, useAtom } from "jotai"
import { Category } from "budio"

type Config = {
  categories: Category[]
}

const configAtom = atom<Config>({
  categories: [],
})

export function useBudget() {
  return useAtom(configAtom)
}
