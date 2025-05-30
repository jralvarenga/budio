import { Text as RNText, TextProps } from "react-native"
import { cn } from "@/lib/cn"

export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn("text-foreground", className)} {...props} />
}
