import { AccountInfo } from "@/components/account/accountInfo"
import { AccountsList } from "@/components/account/accountsList"
import { NewAccount } from "@/components/account/newAccount"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default async function AccountsPage() {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3">
        <div className="px-4 pt-4">
          <Header title="Accounts">
            <NewAccount trigger={<Button size="sm">Add Account</Button>} />
          </Header>
        </div>

        <AccountsList />
      </div>

      <div className="flex-1 border-l border-l-muted">
        <AccountInfo />
      </div>
    </div>
  )
}
