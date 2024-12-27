"use client"

import { FormEvent, useState, useTransition } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Account, AccountType } from "budio"
import { Checkbox } from "../ui/checkbox"
import { Download } from "lucide-react"
import { toast } from "sonner"
import { createAccount } from "@/actions/accounts"
import { Spinner } from "../spinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useAccounts } from "@/hooks/useAccounts"

export function NewAccountForm() {
  const [isPending, startTransition] = useTransition()
  const [accounts, setAccounts] = useAccounts()
  const [account, setAccount] = useState<Partial<Account>>({
    balance: "" as unknown as number,
    digits: "" as unknown as number,
    limit: "" as unknown as number,
    title: "",
    notes: "",
    type: "" as AccountType,
  })
  const [setLimit, setSetLimit] = useState(false)

  async function createAccountHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    startTransition(async () => {
      const newAccount = await createAccount(account)

      setAccounts({
        ...accounts,
        list: [...accounts.list, newAccount],
      })
      console.log(accounts);
    })

    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Done",
        onClick: () => console.log("Done"),
      },
    })
  }

  return (
    <form onSubmit={createAccountHandle} className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <input
          value={account.balance}
          inputMode="numeric"
          type="number"
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              balance: e.target.value as unknown as number,
            }))
          }
          required
          className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
          placeholder="0.00"
        />
        {setLimit && (
          <>
            <span className="text-2xl">/</span>
            <input
              value={account.limit}
              onChange={(e) =>
                setAccount((dt) => ({
                  ...dt,
                  limit: e.target.value as unknown as number,
                }))
              }
              required
              className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
              placeholder="0.00"
            />
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <Input
          value={account.title}
          required
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              title: e.target.value,
            }))
          }
          placeholder="Account title"
          className="font-bold"
        />
        <Input
          value={account.digits}
          required
          onChange={(e) =>
            setAccount((dt) => ({
              ...dt,
              digits: e.target.value as unknown as number,
            }))
          }
          type="number"
          inputMode="numeric"
          placeholder="Last 4 digits"
          className="font-bold"
        />
      </div>

      <Select
          onValueChange={(value) => setAccount((dt) => ({ ...dt, type: value as AccountType }))}
          defaultValue={account.type}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a type..." />
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="depository">Depository</SelectItem>
            <SelectItem value="credit_card">Credit card</SelectItem>
            <SelectItem value="savings">Savings</SelectItem>
            </SelectContent>
        </Select>
      <Textarea
        value={account.notes}
        onChange={(e) =>
          setAccount((dt) => ({
            ...dt,
            notes: e.target.value,
          }))
        }
        placeholder="Comments..."
        rows={3}
        className="resize-none"
      />

      <div className="my-3 flex items-center space-x-2">
        <Checkbox
          id="new_account_limit"
          onClick={() => setSetLimit(!setLimit)}
          checked={setLimit}
        />
        <label
          htmlFor="new_account_limit"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set a limit for this account
        </label>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? <Spinner /> : <Download />}
        Save
      </Button>
    </form>
  )
}
