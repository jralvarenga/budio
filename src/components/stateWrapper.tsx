"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { useBudget } from "@/hooks/useBudget"
import { Account, Category } from "budio"
import { useEffect } from "react"

interface Props {
  children: React.ReactNode
  accounts: Account[]
    categories: Category[]
}

export function StateWrapper({ children, accounts: initAccounts, categories: initCategories }: Props) {
  const [accounts, setAccounts] = useAccounts()
  const [budget, setBudget] = useBudget()

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

  /**
   * Set the initial budget state
   */
  useEffect(() => {
    if (initCategories) {
      setBudget({
        ...budget,
        categories: initCategories,
      })
    }
  }, [initCategories])

  return children
}
