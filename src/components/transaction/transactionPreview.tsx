import { useTransactions } from "@/hooks/useTransactions"
import { cn } from "@/lib/utils"
import { Transaction } from "budio"
import dayjs from "dayjs"
import { IterationCcw } from "lucide-react"
import { Badge } from "../ui/badge"

interface Props {
  transaction: Transaction
  index: number
}

export function TransactionPreview({ transaction, index }: Props) {
  const [transactions, setTransactions] = useTransactions()

  return (
    <button
      key={transaction.id}
      className={cn(
        "transactions-start flex w-full flex-col gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
        transactions.selected?.id === transaction.id && "bg-muted",
      )}
      onClick={() =>
        setTransactions({
          ...transactions,
          selected: transaction,
          selectedIndex: index,
        })
      }
    >
      <div className="flex w-full flex-col gap-1">
        <div className="transactions-center flex">
          <div className="flex items-center gap-2">
            {transaction.recurrent && (
              <div className="rounded-md border border-muted p-1">
                <IterationCcw size={10} />
              </div>
            )}
            <div className="font-semibold">{transaction.title}</div>
          </div>
          <div
            className={cn(
              "ml-auto font-bold",
              transactions.selected?.id === transaction.id
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            ${transaction.amount.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {transaction.category.map((category, i) => (
              <Badge
                key={`cateogry_transaction_preview_${i}`}
                className="text-xs text-muted-foreground"
                variant={"outline"}
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="text-xs font-medium">
            {dayjs(transaction.timestamp).format("DD MMMM, YYYY")}
          </div>
        </div>
      </div>
      {/* <div className="line-clamp-2 text-xs text-muted-foreground">
        {transaction.notes?.substring(0, 300)}
      </div> */}
      {/* {transaction.labels.length ? (
        <div className="flex transactions-center gap-2">
          {transaction.labels.map((label) => (
            <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
              {label}
            </Badge>
          ))}
        </div>
      ) : null} */}
    </button>
  )
}
