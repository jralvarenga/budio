"use client"

import { useEffect, useState } from "react"
import { RefillAccountDialog } from "./refillAccountsDialog"

interface Props {
  budget: number
}

export function RefillAccounts({ budget: defaultBudget }: Props) {
  const [budget, setBudget] = useState("")

  useEffect(() => {
    if (defaultBudget && defaultBudget !== 0) {
      setBudget(defaultBudget.toFixed(2))
    }
  }, [defaultBudget, setBudget])

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <div className="flex">
          {budget !== "" && <span className="text-5xl font-bold">$</span>}
          <input
            type="number"
            className="border-none bg-inherit text-5xl max-w-48 font-bold outline-none"
            placeholder="$0.00"
            name="budget"
            id=""
            value={budget}
            inputMode="numeric"
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <RefillAccountDialog budget={parseFloat(budget)} />
      </div>
    </>
  )
}
