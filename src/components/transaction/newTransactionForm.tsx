"use client"

import { FormEvent, useState, useTransition } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Transaction } from "budio"
import { Textarea } from "../ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Download } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { useAccounts } from "@/hooks/useAccounts"
import { createTransaction } from "@/actions/transactions"
import { toast } from "sonner"
import { useTransactions } from "@/hooks/useTransactions"

export function NewTransactionForm() {
  const [accounts] = useAccounts()
  const [isPending, startTransition] = useTransition()
  const [transactions, setTransactions] = useTransactions()
  const [transaction, setTransaction] = useState<Partial<Transaction>>({
    amount: "" as unknown as number,
    category: [],
    title: "",
    recurrent: false,
    notes: "",
    account_id: "",
  })
  const [selectedCategorie, setSelectedCategorie] = useState("")

  async function handleTransactionSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    transaction.category = [selectedCategorie]

    try {
      startTransition(async () => {
        const newTransaction = await createTransaction(transaction)
      
        setTransactions({
            ...transactions,
            list: [...transactions.list, newTransaction],
          })
        })

      toast("Transaction has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleTransactionSubmit}>
      <div className="flex items-center justify-between gap-2">
        <input
          value={transaction.amount}
          required
          onChange={(e) =>
            setTransaction((dt) => ({
              ...dt,
              amount: e.target.value as unknown as number,
            }))
          }
          className="w-full border-none bg-inherit text-center font-mono text-4xl font-bold outline-none"
          placeholder="0.00"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Input
          value={transaction.title}
          required
          onChange={(e) =>
            setTransaction((dt) => ({
              ...dt,
              title: e.target.value,
            }))
          }
          placeholder="Account name"
          className="font-bold"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <Select
          onValueChange={(value) => setSelectedCategorie(value)}
          defaultValue={selectedCategorie}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a categorie..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="categorie1">Categorie 1</SelectItem>
            <SelectItem value="categorie2">Categorie 2</SelectItem>
            <SelectItem value="categorie3">Categorie 3</SelectItem>
            <SelectItem value="categorie4">Categorie 4</SelectItem>
          </SelectContent>
        </Select>
        <Select
          required
          onValueChange={(value) => setTransaction((dt) => ({ ...dt, account_id: value }))}
          defaultValue={transaction.account_id}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose an account..." />
          </SelectTrigger>
          <SelectContent>
            {accounts.list.map((account) => (
              <SelectItem key={`new_transaction_account_${account.id}`} value={account.id.toString()}>
                {account.title}
              </SelectItem>
            ))}
            {/* <SelectGroup>
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
            </SelectGroup> */}
          </SelectContent>
        </Select>
      </div>
      <Textarea
        value={transaction.notes}
        onChange={(e) =>
          setTransaction((dt) => ({
            ...dt,
            notes: e.target.value,
          }))
        }
        placeholder="Notes..."
        rows={3}
        className="resize-none"
      />
      <div className="my-3 flex items-center space-x-2">
        <Checkbox
          id="new_transaction_recurrent"
          onClick={() => setTransaction((dt) => ({ ...dt, recurrent: !dt.recurrent }))}
          checked={transaction.recurrent}
        />
        <label
          htmlFor="new_transaction_recurrent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set as recurrent
        </label>
      </div>

      <Button disabled={isPending} type="submit">
        <Download />
        Save
      </Button>
    </form>
  )
}
