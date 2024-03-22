import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";

import useLogIn from "../../src/hooks/useLogIn";

const LoginPage = () => {

  const { email, emailValid, setEmail, password, setPassword, validateEmail, onSubmit } = useLogIn();

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Text style={styles.title}>Connexion à My RS</Text>
        <View style={styles.formContainer}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Votre email" value={email} onChangeText={setEmail} onEndEditing={validateEmail} keyboardType="email-address" autoCapitalize='none' />

          <Text>Mot de passe</Text>
          <TextInput style={styles.input} placeholder="Votre mot de passe" secureTextEntry={true} value={password} onChangeText={setPassword} autoCapitalize='none' />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.loginButton]} onPress={onSubmit}>
            <Text style={styles.textLoginButton}>Se connecter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  formContainer: {
    flex: 1,
    padding: 30,
  },
  input: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
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

export default LoginPage;