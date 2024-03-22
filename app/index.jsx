import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from 'expo-router';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>My App</Text>
        <Pressable style={[styles.button, styles.loginButton]} onPress={() => { router.push("/login") }}>
          <Text style={[styles.textButton, styles.textLoginButton]}>Connexion</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
          router.push("/register")
        }}>
          <Text style={styles.textButton}>Inscription</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  },
  textButton: {
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: 'black',
  },
  textLoginButton: {
    color: 'white'
  }
});

export default HomePage;