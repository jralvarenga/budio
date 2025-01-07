"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { ChevronDown, ChevronUp, Trash } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useTransactions } from "@/hooks/useTransactions"
import { TransactionRow } from "../transaction/transactionRow"
import { Transaction } from "budio"
import { useRouter } from "next/navigation"

export function AccountInfo() {
  const router = useRouter()
  const [accounts, setAccounts] = useAccounts()
  const [transactions, setTransactions] = useTransactions()
  const { selected: account, selectedIndex } = accounts

  // fetch them instead of filtering
  const accountTransactions = transactions.list.filter(
    (val) => val.account_id === account?.id,
  )

  if (accounts.list.length === 0 || accounts.selected === null) {
    return <div className="w-full"></div>
  }

  function goAccountUp() {
    setAccounts({
      ...accounts,
      selected: accounts.list[selectedIndex! - 1 <= 0 ? 0 : selectedIndex! - 1],
      selectedIndex: selectedIndex! - 1 <= 0 ? 0 : selectedIndex! - 1,
    })
  }

  function goAccountDown() {
    setAccounts({
      ...accounts,
      selected:
        accounts.list[
          selectedIndex! + 1 > accounts.list.length - 1
            ? accounts.list.length - 1
            : selectedIndex! + 1
        ],
      selectedIndex:
        selectedIndex! + 1 > accounts.list.length - 1
          ? accounts.list.length - 1
          : selectedIndex! + 1,
    })
  }

  function goToTransaction(transaction: Transaction) {
    setTransactions({
      ...transactions,
      selected: transaction,
      selectedIndex: transactions.list
        .map((dt) => dt.id)
        .indexOf((id: number) => id === transaction.id),
    })
    router.push("/transactions")
  }

  return (
    <div>
      <div className="flex items-center justify-between p-2 pb-0">
        <div>
          <Button variant={"ghost"} onClick={goAccountUp}>
            <ChevronUp />
          </Button>
          <Button variant={"ghost"} onClick={goAccountDown}>
            <ChevronDown />
          </Button>
        </div>

        <div>
          <Button variant={"ghost"}>
            <Trash />
          </Button>
        </div>
      </div>

      <div className="mb-3 flex items-start justify-between border-b border-muted p-4 pb-3">
        <div>
          <h4 className="text-2xl font-bold">
            ${account?.balance.toFixed(2)}
            {account?.limit && (
              <span className="text-xs text-muted-foreground">
                {" "}
                / ${account?.limit.toFixed(2)}
              </span>
            )}
          </h4>
          <div className="flex items-center gap-1">
            <h6>{account?.name}</h6>
          </div>
        </div>
        <Badge className="font-bold capitalize">
          {account?.type.replaceAll("_", " ")}
        </Badge>
      </div>

      {account?.notes && (
        <div className="mb-3">
          <p className="p-4">{account?.notes}</p>
        </div>
      )}

      <div className="flex flex-col gap-2 px-4">
        {accountTransactions.map((transaction, i) => (
          <button
            onClick={() => goToTransaction(transaction)}
            key={`account_${account?.id}_transaction_${i}`}
          >
            <TransactionRow transaction={transaction} />
          </button>
        ))}
      </div>
    </div>
  )
}
