import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, StyleSheet, SafeAreaView } from "react-native";

const RegisterPage = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Text style={styles.title}>S'incrire sur My RS</Text>
        <View style={styles.formContainer}>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Votre email" />
          <Text>Prénom Nom</Text>
          <TextInput style={styles.input} placeholder="Votre prénom et votre nom" />
          <Text>Nom d'utilisateur</Text>
          <TextInput style={styles.input} placeholder="Votre nom d'utilisateur" />
          <Text>Mot de passe</Text>
          <TextInput style={styles.input} placeholder="Votre mot de passe" secureTextEntry={true} />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.loginButton]}>
            <Text style={styles.textLoginButton}>Valider</Text>
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

export default RegisterPage;