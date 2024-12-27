import { ReactNode } from "react";
import { AppDialog } from "../appDialog";
import { NewAccountForm } from "./newAccountForm";

interface Props {
  trigger: ReactNode
}

export function NewAccount({ trigger }: Props) {
  return (
    <AppDialog
      title="Add Account"
      content={<NewAccountForm />}
      trigger={trigger}
      description="New account to save your transactions"  
    />
  )
}