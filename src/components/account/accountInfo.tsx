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
  const accountTransactions = transactions.list.filter((val) => val.account_id === account?.id)

  function goAccountUp() {
    setAccounts({
      ...accounts,
      selected:
        accounts.list[
          selectedIndex! - 1 <= 0 ? 0 : selectedIndex! - 1
        ],
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
      // @ts-expect-error Error is expected for this of filter
      selectedIndex: transactions.list.map((dt) => dt.id).indexOf((id: string) => id === transaction.id)
    })
    router.push('/transactions')
  }

  return (
    <div>
      <div className="flex items-center justify-between p-2 pb-0">
        <div>
          <Button
            variant={"ghost"}
            onClick={goAccountUp}
          >
            <ChevronUp />
          </Button>
          <Button
            variant={"ghost"}
            onClick={goAccountDown}
          >
            <ChevronDown />
          </Button>
        </div>

        <div>
          <Button variant={"ghost"}>
            <Trash />
          </Button>
        </div>
      </div>

      <div className="flex items-start justify-between border-b border-muted p-4 pb-3 mb-3">
        <div>
          <h4 className="text-2xl font-bold">
            ${account?.amount.toFixed(2)}
          </h4>
          <div className="flex gap-1 items-center">
            <h6>{account?.name}</h6>
          </div>
        </div>
        <Badge className="capitalize font-bold">{account?.type.replaceAll('_', ' ')}</Badge>
      </div>

      {account?.notes && (
        <div className="mb-3">
          <p className="p-4">{account?.notes}</p>
        </div>
      )}

      <div className="px-4 flex flex-col gap-2">
        {accountTransactions.map((transaction, i) => (
          <button onClick={() => goToTransaction(transaction)}
            key={`account_${account?.id}_transaction_${i}`}
          >
            <TransactionRow
              transaction={transaction}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
