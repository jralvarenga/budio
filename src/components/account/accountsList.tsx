"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { ScrollArea } from "../ui/scroll-area"
import { Input } from "../ui/input"
// import { AccountPreview } from "./accountPreview"
import { Account } from "budio"
import { useEffect } from "react"
import { Search } from "lucide-react"
import { AccountPreview } from "./accountPreview"

interface Props {
  initialAccounts: Account[]
}

export function AccountsList({ initialAccounts }: Props) {
  const [accounts, setAccounts] = useAccounts()

  useEffect(() => {
    if (initialAccounts) {
      setAccounts({
        ...accounts,
        list: initialAccounts,
        selected:
          initialAccounts.length > 0 ? 
          accounts.selected === null ? initialAccounts[0] : accounts.selected : null,
        selectedIndex: accounts.selectedIndex === null ? 0 : accounts.selectedIndex,
      })
    }
  }, [initialAccounts])

  return (
    <>
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur">
        <form className="px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>

      <div className="flex-1">
        <ScrollArea className="h-[calc(100vh_-_124px)] p-4 pb-0">
          <div className="flex flex-col gap-2">
            {accounts.list.map((account, i) => (
              <AccountPreview
                account={account}
                index={i}
                key={`account_st_${i}`}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  )
}
