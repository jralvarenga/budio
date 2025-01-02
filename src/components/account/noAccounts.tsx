import { Button } from "../ui/button"
import { NewAccount } from "./newAccount"

export function NoAccounts() {
  return (
    <div className="mt-5 flex w-full flex-col items-center justify-center gap-2">
      <h1 className="font-bold">No accounts</h1>
      <p className="text-muted-foreground">
        You don&apos;t have any accounts yet.
      </p>
      <NewAccount trigger={<Button>Create New Account</Button>} />
    </div>
  )
}
