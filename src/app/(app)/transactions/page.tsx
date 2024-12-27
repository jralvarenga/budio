import { Header } from "@/components/header"
import { TransactionsList } from "@/components//transaction/transactionsList"
import { Transaction } from "budio"
import { TransactionInfo } from "@/components/transaction/transactionInfo"
import { TRANSACTIONS_LIST } from "@/constants/mocks/transactions"

async function getData(): Promise<Transaction[]> {
  return TRANSACTIONS_LIST
}

export default async function TransactionsPage() {
  const transactions = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3 ">
        <div className="pt-4 px-4">
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
