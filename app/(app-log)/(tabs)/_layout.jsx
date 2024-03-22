import { Tabs } from 'expo-router';

const TabsHomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="feed/index" options={{ headerShown: false, title: "Feed" }} />
      <Tabs.Screen name="profile/index" options={{ headerShown: false, title: "Profile" }} />
    </Tabs>
  )
}

export default TabsHomeLayout;