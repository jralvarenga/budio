"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { ScrollArea } from "../ui/scroll-area"
import { Input } from "../ui/input"
import { Search } from "lucide-react"
import { AccountPreview } from "./accountPreview"
import { NoAccounts } from "./noAccounts"

export function AccountsList() {
  const [accounts] = useAccounts()

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
        {accounts.list.length === 0 ? (
          <NoAccounts />
        ) : (
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
        )}
      </div>
    </>
  )
}
