import { StateWrapper } from "@/components/stateWrapper"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Account } from "budio"
import { Provider } from "jotai"

interface Props {
  accounts: Account[]
  children: React.ReactNode
}

export function Providers({
  children,
  accounts
}: Readonly<Props>) {
  return (
    <Provider>
      <StateWrapper accounts={accounts}>
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster />
      </StateWrapper>
    </Provider>
  )
}
