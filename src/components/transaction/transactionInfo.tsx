"use client"

import { useTransactions } from "@/hooks/useTransactions"
import { ChevronDown, ChevronUp, IterationCcw, Navigation, Trash } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import dayjs from "dayjs"

export function TransactionInfo() {
  const [transactions, setTransactions] = useTransactions()
  const { selected: transaction, selectedIndex } = transactions

  function goTransactionUp() {
    setTransactions({
      ...transactions,
      selected:
        transactions.list[
          selectedIndex! - 1 <= 0 ? 0 : selectedIndex! - 1
        ],
      selectedIndex: selectedIndex! - 1 <= 0 ? 0 : selectedIndex! - 1,
    })
  }

  function goTransactionDown() {
    setTransactions({
      ...transactions,
      selected:
        transactions.list[
          selectedIndex! + 1 > transactions.list.length - 1
            ? transactions.list.length - 1
            : selectedIndex! + 1
        ],
      selectedIndex:
        selectedIndex! + 1 > transactions.list.length - 1
          ? transactions.list.length - 1
          : selectedIndex! + 1,
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between p-2 pb-0">
        <div>
          <Button
            variant={"ghost"}
            onClick={goTransactionUp}
          >
            <ChevronUp />
          </Button>
          <Button
            variant={"ghost"}
            onClick={goTransactionDown}
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

      <div className="flex items-start justify-between border-b border-muted p-4">
        <div>
          <h4 className="text-2xl font-bold">
            ${transaction?.amount.toFixed(2)}
          </h4>
          <div className="flex gap-1 items-center">
            {transaction?.recurrent && (
              <div className="w-5 h-5 flex items-center justify-center border rounded-md border-muted">
                <IterationCcw size={10} />
              </div>
            )}
            <h6>{transaction?.title}</h6>
          </div>
          <button className="mt-3 flex items-center gap-1 text-sm hover:underline">
            <Navigation className="-scale-x-[1] transform" size={15} />
            <span>See location, direccion</span>
          </button>
        </div>
        <div>{dayjs(transaction?.timestamp).format('DD MMMM, YYYY')}</div>
      </div>

      <div className="flex flex-wrap gap-2 p-4">
        <Badge>Account name</Badge>
        {transaction &&
          transaction.categories.length > 0 &&
          transaction?.categories.map((category, i) => (
            <Badge
              key={`transaction_${transaction?.id}_categorie_${i}`}
              variant={"outline"}
            >
              {category}
            </Badge>
          ))}
      </div>

      <p className="p-4">{transaction?.notes}</p>
    </div>
  )
}
