import { Transaction } from "budio"
// import { Badge } from "../ui/badge"

interface Props {
  transaction: Transaction
}

export function TransactionRow({ transaction }: Props) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-muted p-2 duration-150 hover:bg-muted">
      <div className="flex items-center gap-2">
        <h4 className="text-sm font-bold">{transaction.title}</h4>
        {/* {transaction.categories.map((category, i) => (
          <Badge variant={"outline"} key={`category_transaction_${i}`}>
            {category}
          </Badge>
        ))} */}
      </div>

      <h4 className="text-sm font-bold">${transaction.amount.toFixed(2)}</h4>
    </div>
  )
}
