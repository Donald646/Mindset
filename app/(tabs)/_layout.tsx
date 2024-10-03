import { Tabs } from 'expo-router';
import { HomeIcon } from 'lucide-react-native';
import React from 'react';
import { Image } from 'react-native'; // {{ edit_1 }}: Ensure Image is imported from react-native

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Ensure the header is shown
        headerStyle: {
          backgroundColor: "#323232", // Set the header background color
        },
      }}>
      <Tabs.Screen
        name="index"
        
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeIcon />, // {{ edit_1 }}: Set the tab bar icon for Home
        }}
      />
      
    </Tabs>
  );
}
