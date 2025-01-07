"use client"

import { useState } from "react"
import { RefillAccountAccountRow } from "./refillAccountAccountRow"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Input } from "../ui/input"

interface Props {
  budget: number
}

interface AccountBalance {
  name: string
  accountId: string
  balance: string
}

export function RefillAccountsForm({ budget }: Props) {
  const [accounts, setAccounts] = useState<AccountBalance[]>([])
  const [newAccountBalance, setNewAccountBalance] = useState<AccountBalance>({
    name: "",
    accountId: "",
    balance: "",
  })

  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-muted-foreground">Your Budget</h3>
          <span className="text-lg font-bold">${budget.toFixed(2)}</span>
        </div>
        <div>
          <h3 className="font-bold text-muted-foreground">What&apos;s left</h3>
          <span className="text-lg font-bold">
            ${(budget - 430).toFixed(2)}
          </span>
        </div>
      </div>

      {accounts.map((account, i) => (
        <RefillAccountAccountRow
          key={`account_name_${i}`}
          name={account.name || ""}
          balance={account.balance || ""}
          onRemove={() => {
            const arr = accounts.filter(
              (dt) => dt.accountId !== account.accountId,
            )
            setAccounts(arr)
          }}
        />
      ))}

      <form
        className="flex items-center gap-1"
        onSubmit={(e) => {
          e.preventDefault()
          setAccounts([...accounts, newAccountBalance])
          setNewAccountBalance({
            accountId: "",
            balance: "",
            name: "",
          })
        }}
      >
        <Select
          onValueChange={(value) =>
            setNewAccountBalance((dt) => ({
              ...dt,
              accountId: value,
              name: "Testing",
            }))
          }
          defaultValue={newAccountBalance.accountId}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose an account..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Depository</SelectLabel>
              <SelectItem value="es1">Account name 1</SelectItem>
              <SelectItem value="est2">Account name 2</SelectItem>
              <SelectItem value="est3">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Savings</SelectLabel>
              <SelectItem value="es4">Account name 1</SelectItem>
              <SelectItem value="es5">Account name 2</SelectItem>
              <SelectItem value="es6">Account name 3</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Credits</SelectLabel>
              <SelectItem value="es7">Account name 1</SelectItem>
              <SelectItem value="es8">Account name 2</SelectItem>
              <SelectItem value="es9">Account name 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Amount"
          type="number"
          inputMode="numeric"
          value={newAccountBalance.balance}
          onChange={(e) =>
            setNewAccountBalance((dt) => ({
              ...dt,
              balance: e.target.value,
            }))
          }
        />
        <Button variant={"outline"}>
          <Plus />
          Add
        </Button>
      </form>
    </div>
  )
}
