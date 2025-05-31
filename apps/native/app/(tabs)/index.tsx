import { SafeAreaView } from "@/components/ui/safeareaview"
import { View } from "@/components/ui/view"
import { Text } from "@/components/ui/text"
import { ThemeToggle } from "@/components/theme-toggle"
import { IconButton } from "@/components/icon-button"
import { Bot, Plus } from "lucide-react-native"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { colors } from "@/lib/theme"
import { useColorScheme } from "@/lib/use-color-scheme"
import { useRouter } from "expo-router"

export default function HomeScreen() {
  const router = useRouter()
  const { colorScheme } = useColorScheme()
  const [value, setValue] = useState("")

  return (
    <SafeAreaView className="flex flex-1 flex-col">
      <View className="flex w-full flex-row items-center justify-between p-5 pb-0">
        <ThemeToggle />
        <Button variant={"outline"} className="aspect-square h-12 w-12">
          <Plus color={colors[colorScheme || "light"].foreground} />
        </Button>
      </View>
      <View className="flex flex-1 items-center justify-center">
        <Text className="mt-4 text-6xl font-extrabold">
          ${(2000).toFixed(2)}
        </Text>
      </View>
      <View className="flex flex-col gap-3 px-5 pb-20">
        <View className="w-full flex-row items-center gap-2">
          <Input
            placeholder="Add a transaction with budio..."
            value={value}
            onChangeText={(text) => setValue(text)}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            className="bg-muted flex-1 p-2 pl-3"
          />
          <Button
            className="aspect-square h-16 w-16"
            onPress={() => router.push("/add-transaction")}
          >
            <Plus color={colors[colorScheme || "light"].primaryForeground} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}
