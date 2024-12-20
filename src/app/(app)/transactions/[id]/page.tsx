import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Calendar, EllipsisVertical, Info, X } from "lucide-react"
import Link from "next/link"

export default async function TransactionInfoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex items-center justify-between">
        <Link href={"/transactions"}>
          <Button variant="ghost">
            <X />
          </Button>
        </Link>

        <h6 className="flex items-center gap-3 text-card-foreground">
          <Calendar size={14} />
          <span className="text-sm font-bold">Tuesday, Nov 19, 2024</span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size={"sm"}>
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Change</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h6>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Transaction name {id}</h2>
        <h4 className="text-3xl font-bold">$102.99</h4>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-card-foreground">Category</span>
            <Badge className="rounded-full text-sm">🥶 Badge</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-card-foreground">Account</span>
            <Badge className="text-sm">Account name</Badge>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="make-recurrent" />
          <Label htmlFor="make-recurrent">Recurrent</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={18} className="text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  When converting to recurrent, it will be added to your budget,
                  in recurrent categorie
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
