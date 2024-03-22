import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const DrawerUserLog = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image source={require('./../../../assets/favicon.png')} />
        <Text style={styles.title}>My App</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItemList label="Log Out" onPress={() => { router.replace('/') }} /> */}
      </DrawerContentScrollView>
      <Pressable style={[styles.logOutBtn]} onPress={() => router.replace('/')}>
        <Text style={styles.textBtn}>Log Out</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logOutBtn: {
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'black',
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DrawerUserLog;