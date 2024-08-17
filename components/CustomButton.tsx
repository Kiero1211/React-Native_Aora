import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface CustomButtonProps extends TouchableOpacityProps{
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
    isLoading,
    children,
    ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
        {...props} 
        className={
            `
                bg-secondary-200 rounded-xl min-h-[62px] flex-row justify-center items-center p-3 
                ${containerStyles} 
                ${isLoading ? "opacity-50" : ""}
            `
        }
        onPress={handlePress}
    >
      <Text className={`text-xl font-semibold ${textStyles}`}>{title}</Text>
      {children}
    </TouchableOpacity>
  )
}

export default CustomButton