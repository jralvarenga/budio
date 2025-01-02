import { ReactNode } from "react"
import { NewTransactionForm } from "./newTransactionForm"
import { AppDialog } from "../appDialog"

interface Props {
  trigger: ReactNode
}

export function NewTransaction({ trigger }: Props) {
  return (
    <AppDialog
      trigger={trigger}
      content={<NewTransactionForm />}
      title="Add New Transaction"
      description="Create a new transaction."
    />
  )
}
