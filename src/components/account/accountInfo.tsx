"use client"

import { useAccounts } from "@/hooks/useAccounts"
import { ChevronDown, ChevronUp, Trash } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useTransactions } from "@/hooks/useTransactions"
import { TransactionRow } from "../transaction/transactionRow"
import { Transaction } from "budio"
import { useRouter } from "next/navigation"
import { NewAccount } from "./newAccount"

export function AccountInfo() {
  const router = useRouter()
  const [accounts, setAccounts] = useAccounts()
  const [transactions, setTransactions] = useTransactions()
  const { selected: account, selectedIndex } = accounts

  // fetch them instead of filtering
  const accountTransactions = transactions.list.filter((val) => val.account_id === account?.id)


  if (accounts.list.length === 0) {
    return (
      <div className="w-full h-full flex gap-2 flex-col items-center justify-center">
        <h1 className="font-bold">No accounts</h1>
        <p className="text-muted-foreground">You don&apos;t have any accounts yet.</p>
        <NewAccount
          trigger={
            <Button>
              Create New Account
            </Button>
          }
        />
      </div>
    )
  }

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
            ${account?.balance.toFixed(2)}
            {account?.limit && (
              <span className="text-muted-foreground text-xs">
                {" "}/ ${account?.limit.toFixed(2)}
              </span>
            )}
          </h4>
          <div className="flex gap-1 items-center">
            <h6>{account?.title}</h6>
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
