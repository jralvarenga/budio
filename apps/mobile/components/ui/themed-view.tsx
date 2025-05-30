import { View as RNView, ViewProps } from "react-native"
import { cn } from "@/lib/cn"

export function View({ className, ...props }: ViewProps) {
  return <RNView className={cn("bg-background", className)} {...props} />
}
