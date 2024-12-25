import { useAccounts } from "@/hooks/useAccounts"
import { cn } from "@/lib/utils"
import { Account } from "budio"

interface Props {
  account: Account
  index: number
}

export function AccountPreview({ account, index }: Props) {
  const [accounts, setAccounts] = useAccounts()

  return (
    <button
      key={account.id}
      className={cn(
        "accounts-start flex w-full flex-col gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
        accounts.selected?.id === account.id && "bg-muted",
      )}
      onClick={() =>
        setAccounts({
          ...accounts,
          selected: account,
          selectedIndex: index,
        })
      }
    >
      <div className="flex w-full flex-col gap-1">
        <div className="accounts-center flex">
          <div className="font-semibold">{account.name}</div>
          <div
            className={cn(
              "ml-auto font-bold",
              accounts.selected?.id === account.id
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            ${account.amount.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {account.notes?.substring(0, 300)}
      </div>
    </button>
  )
}
