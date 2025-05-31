import { Pressable, PressableProps, View } from "react-native"

interface Props extends Omit<PressableProps, "children"> {
  icon: React.ReactNode
}

export function IconButton({ icon, ...props }: Props) {
  return (
    <Pressable
      className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 active:opacity-70"
      {...props}
    >
      {/* <View className='flex-1 aspect-square justify-center items-start '> */}
      {icon}
      {/* </View> */}
    </Pressable>
  )
}
