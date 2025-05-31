import { Link, Stack } from "expo-router"
import { View } from "react-native"
import { Text } from "@/components/ui/text"

export default function AddTransactionScreen() {
  return (
    <>
      <View>
        <Text>This screen doesn't exist.</Text>

        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}
