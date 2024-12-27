import { getUserAccounts } from "@/actions/accounts"
import { AccountInfo } from "@/components/account/accountInfo"
import { AccountsList } from "@/components/account/accountsList"
import { NewAccount } from "@/components/account/newAccount"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Account } from "budio"

async function getData(): Promise<
Account[]
> {
  return getUserAccounts()
}

export default async function AccountsPage() {
  const data = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3 ">
        <div className="px-4 pt-4">
          <Header title="Accounts">
            <NewAccount
              trigger={
                <Button size='sm'>
                  Add Account
                </Button>
              }
            />
          </Header>
        </div>

        <AccountsList initialAccounts={data} />
      </div>

      <div className="flex-1 border-l border-l-muted">
        <AccountInfo />
      </div>
    </div>
  )
}
