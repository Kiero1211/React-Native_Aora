import { View, Text, Image } from 'react-native'
import React from 'react'

const TabIcon = ({name, icon, color, focused}) => {
    return (
        <View className="items-center gap-2">
            <Image 
                source={icon}
                tintColor={color}
                resizeMode="contain"
                className="w-6 h-6"
            />

            <Text 
                className={`${focused ? "font-psemibold" : "font-pregular"} text-sm`}
                style={{color: color}}
            >
                {name}
            </Text>
        </View>
    )
}

export default TabIcon;