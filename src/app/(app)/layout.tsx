import { getUserAccounts } from "@/actions/accounts"
import { AppSidebar } from "@/components/appSidebar"
import { NewTransaction } from "@/components/transaction/newTransaction"
import { Button } from "@/components/ui/button"
import { AuthWrapper } from "@/providers/authWrapper"
import { Providers } from "@/providers/providers"
import { createClient } from "@/supabase/server"
import { redirect } from "next/navigation"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (!user || error) {
    return redirect("/login")
  }

  const accounts = await getUserAccounts()

  return (
    <Providers accounts={accounts}>
      <AuthWrapper currentUser={user}>
        <AppSidebar />
        <div className="flex-1 space-y-4">{children}</div>

        <NewTransaction
          trigger={
            <div className="fixed bottom-8 right-8">
              <Button className="h-14 w-14 rounded-full">
                <span className="text-4xl">+</span>
              </Button>
            </div>
          }
        />
      </AuthWrapper>
    </Providers>
  )
}
