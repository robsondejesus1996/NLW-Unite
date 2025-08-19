
import { TextInput, View, TextInputProps } from "react-native";

import { colors } from "@/assets/styles/colors";

function Input({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
      {children}
    </View>
  )
}

function Field({ placeholder, ...rest }: TextInputProps) {
  return (

    <TextInput
      className="flex-1 text-white text-base font-regular"
      placeholderTextColor={colors.gray[200]}
      placeholder={placeholder}
      {...rest}/>
  )
}

Input.Field = Field;

export { Input }