import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context"
import { cn } from "@/lib/utils"

export function SafeAreaView({ className, ...props }: SafeAreaViewProps) {
  return (
    <RNSafeAreaView className={cn("bg-background", className)} {...props} />
  )
}
