import { View } from "react-native"
import { useColorScheme } from "nativewind"
import { themes } from "@/lib/theme"
import { StatusBar } from "expo-status-bar"

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme } = useColorScheme()

  return (
    <View style={themes[colorScheme || "light"]} className="flex-1">
      {children}

      <StatusBar style={"auto"} />
    </View>
  )
}
