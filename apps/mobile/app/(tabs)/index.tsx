import { Text, View, SafeAreaView } from "@/components/ui"

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex w-full flex-row items-center justify-between">
        <Text className="text-2xl font-bold">Home Screen</Text>
        <Text className="ml-2 text-2xl font-bold">👋</Text>
      </View>
      <View className="flex flex-1 items-center justify-center">
        <Text className="mt-4 text-lg">Welcome to the Home Screen!</Text>
      </View>
      <View className="flex flex-col">
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  )
}
