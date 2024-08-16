import { Tabs, Redirect } from 'expo-router'
import TabIcon from 'components/TabIcon';
import React from 'react';
import { icons } from 'constants';

const TabsLayout = () => {
  return (
    <>
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FFA001",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarStyle: {
                    backgroundColor: "#161622",
                    borderTopWidth: 3,
                    borderTopColor: "#232533",
                    height: 84
                }
            }}
        >
            {/* Home */}
            <Tabs.Screen name="home" options={{
                headerShown: false,
                title: "Home",
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon 
                        name="Home"
                        icon={icons.home}
                        color={color}
                        focused={focused}
                    />
                )
            }}/>
            {/* Bookmark */}
            <Tabs.Screen name="bookmark" options={{
                headerShown: false,
                title: "Bookmark",
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon 
                        name="Bookmark"
                        icon={icons.bookmark}
                        color={color}
                        focused={focused}
                    />
                )
            }}/>
            {/* Create */}
            <Tabs.Screen name="create" options={{
                headerShown: false,
                title: "Create",
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon 
                        name="Create"
                        icon={icons.plus}
                        color={color}
                        focused={focused}
                    />
                )
            }}/>
            {/* Profile */}
            <Tabs.Screen name="profile" options={{
                headerShown: false,
                title: "Profile",
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon 
                        name="Profile"
                        icon={icons.profile}
                        color={color}
                        focused={focused}
                    />
                )
            }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout;