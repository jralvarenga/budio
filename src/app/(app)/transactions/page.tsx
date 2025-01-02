import { Header } from "@/components/header"
import { TransactionsList } from "@/components//transaction/transactionsList"
import { TransactionWithAccount } from "budio"
import { TransactionInfo } from "@/components/transaction/transactionInfo"
import { getUserTransactions } from "@/actions/transactions"

async function getData(): Promise<TransactionWithAccount[]> {
  return getUserTransactions()
}

export default async function TransactionsPage() {
  const transactions = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3">
        <div className="px-4 pt-4">
          <Header title="Transactions" />
        </div>

        <TransactionsList initialTransactions={transactions} />
      </div>

      <div className="flex-1 border-l border-l-muted">
        <TransactionInfo />
      </div>
    </div>
  )
}
