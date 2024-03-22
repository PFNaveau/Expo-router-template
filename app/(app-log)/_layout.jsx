import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerUserLog from '../../src/components/DrawerUserLog/DrawerUserLog';

const RootLoglayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <DrawerUserLog {...props} />}>
        <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Home', title: "Home" }} />
        <Drawer.Screen name="logout" options={{
          drawerLabel: 'Log Out',
          drawerItemStyle: {
            display: "none",
          },
        }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default RootLoglayout;