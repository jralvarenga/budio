import { Button } from "../ui/button"
import { NewTransaction } from "./newTransaction"

export function NoTransactions() {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center gap-2">
      <h1 className="font-bold">No Transactions</h1>
      <p className="text-muted-foreground">
        You don&apos;t have any transactions yet.
      </p>
      <NewTransaction trigger={<Button>Add New Transaction</Button>} />
    </div>
  )
}
