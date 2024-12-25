import { Transaction } from "budio";
import { Badge } from "../ui/badge";

interface Props {
  transaction: Transaction
}

export function TransactionRow({ transaction }: Props) {
  return (
    <div className="w-full hover:bg-muted duration-150 flex items-center justify-between p-2 border border-muted rounded-lg">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-sm">{transaction.title}</h4>
        {transaction.categories.map((category, i) => (
          <Badge variant={"outline"} key={`category_transaction_${i}`}>{category}</Badge>
        ))}
      </div>

      <h4 className="font-bold text-sm">${transaction.amount.toFixed(2)}</h4>
    </div>
  )
}