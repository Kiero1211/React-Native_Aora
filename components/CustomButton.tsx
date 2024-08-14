import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string;
    handlePress?: () => void;
    textStyles?: string;
    containerStyles?: string;
    isLoading?: boolean;
}

const CustomButton = ({
    title, 
    handlePress,
    textStyles,
    containerStyles,
    isLoading
}: CustomButtonProps) => {
  return (
    <TouchableOpacity 
        className={
            `
                bg-secondary-200 rounded-xl min-h-[62px] justify-center items-center p-3 
                ${containerStyles} 
                ${isLoading ? "opacity-50" : ""}
            `
        }
        onPress={handlePress}
    >
      <Text className={`text-xl font-semibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton