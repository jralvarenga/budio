import { AccountInfo } from "@/components/account/accountInfo"
import { AccountsList } from "@/components/account/accountsList"
import { Header } from "@/components/header"
import { ACCOUNTS } from "@/constants/mocks/accounts"
import { Account } from "budio"

async function getData(): Promise<
Account[]
> {
  return ACCOUNTS
}

export default async function AccountsPage() {
  const data = await getData()

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3 ">
        <div className="p-4">
          <Header title="Accounts" />
        </div>

        <AccountsList initialAccounts={data} />
      </div>

      <div className="flex-1 border-l border-l-muted">
        <AccountInfo />
      </div>
    </div>
  )
}
