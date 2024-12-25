import { User } from "@supabase/supabase-js"
import { atom, useAtom } from "jotai"

type Config = User | null

const configAtom = atom<Config>(null)

export function useAuth() {
  return useAtom(configAtom)
}
