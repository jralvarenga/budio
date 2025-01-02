"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { Account } from "budio"
import { useEffect } from "react"

interface Props {
  children: React.ReactNode
  accounts: Account[]
}

export function StateWrapper({ children, accounts: initAccounts }: Props) {
  const [accounts, setAccounts] = useAccounts()

  /**
   * Set the initial accounts state
   */
  useEffect(() => {
    if (initAccounts) {
      setAccounts({
        ...accounts,
        list: initAccounts,
        selected:
          initAccounts.length > 0
            ? accounts.selected === null
              ? initAccounts[0]
              : accounts.selected
            : null,
        selectedIndex:
          accounts.selectedIndex === null ? 0 : accounts.selectedIndex,
      })
    }
  }, [initAccounts])

  return children
}
