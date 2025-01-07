import { StateWrapper } from "@/components/stateWrapper"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Account, Category } from "budio"
import { Provider } from "jotai"

interface Props {
  accounts: Account[]
  categories: Category[]
  children: React.ReactNode
}

export function Providers({ children, accounts, categories }: Readonly<Props>) {
  return (
    <Provider>
      <StateWrapper accounts={accounts} categories={categories}>
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster />
      </StateWrapper>
    </Provider>
  )
}
