import { View as RNView, ViewProps } from "react-native"
import { cn } from "@/lib/utils"

export function View({ className, ...props }: ViewProps) {
  return <RNView className={cn("bg-background", className)} {...props} />
}
