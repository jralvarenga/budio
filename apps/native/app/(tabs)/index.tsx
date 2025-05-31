import { SafeAreaView } from "@/components/ui/safeareaview"
import { View } from "@/components/ui/view"
import { Text } from "@/components/ui/text"
import { ThemeToggle } from "@/components/theme-toggle"
import { IconButton } from "@/components/icon-button"
import { Bot } from "lucide-react-native"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function HomeScreen() {
  const [value, setValue] = useState("")

  return (
    <SafeAreaView className="flex flex-1 flex-col">
      <View className="flex w-full flex-row items-center justify-between p-5 pb-0">
        <ThemeToggle />
        <IconButton icon={<Bot className="h-5 w-5" />} />
      </View>
      <View className="flex flex-1 items-center justify-center">
        <Text className="mt-4 text-6xl font-extrabold">
          ${(2000).toFixed(2)}
        </Text>
      </View>
      <View className="flex flex-col gap-3 px-5 pb-16">
        <View className="flex w-full flex-row items-center gap-3">
          <Button className="flex-1">
            <Text>Income</Text>
          </Button>
          <Button className="flex-1">
            <Text>Expense</Text>
          </Button>
        </View>
        <View className="w-full">
          <Input
            placeholder="Ask Budio to do something..."
            value={value}
            onChangeText={(text) => setValue(text)}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
