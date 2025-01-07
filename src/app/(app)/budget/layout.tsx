import { Header } from "@/components/header"
import { RefillAccounts } from "@/components/budget/refillAccounts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { CategoriesList } from "@/components/budget/categoriesList"
import { AppDialog } from "@/components/appDialog"
import { NewCategoryForm } from "@/components/budget/newCategoryForm"

export default function BudgetLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-3">
        <div className="px-4 pt-4">
          <Header title="Budget" />
        </div>

        <div className="mt-5 flex gap-5">
          <div className="flex-1 px-4">
            <RefillAccounts budget={1000} />
            <div className="max-w-lg">
              <div className="mt-5 flex w-full items-center justify-between">
                <h3 className="text-2xl font-bold">Categories</h3>
                <AppDialog
                  trigger={
                    <Button variant={"outline"}>
                      <Plus />
                      Create new category
                    </Button>
                  }
                  content={<NewCategoryForm />}
                  title="Add new category"
                  description="Add new category to your budget"
                />
              </div>

              <div className="mt-3">
                <Input placeholder="Search category..." />
              </div>

              <div className="mt-4">
                <CategoriesList />
              </div>
            </div>
          </div>
        </div>
        </div>

      <div className="flex-1 border-l border-l-muted">
        {children}
      </div>
    </div>
  )
}
