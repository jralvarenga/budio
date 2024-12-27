import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Provider } from "jotai"

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider>
      <SidebarProvider>{children}</SidebarProvider>
      <Toaster />
    </Provider>
  )
}
