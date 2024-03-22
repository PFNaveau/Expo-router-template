import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { router } from 'expo-router';


const useLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const checkLogInForm = () => {
    if (!email || !password || !emailValid) {
      return false;
    }
    return true;
  }

  const validateEmail = useCallback(() => {
    setEmailValid(email.length > 0 && email.indexOf('@') !== -1);
  }, [email])

  const onSubmit = useCallback(() => {

    if (checkLogInForm() && password === 'test' && email === 'test@test.com') {
      // router push and replace
      router.replace('(app-log)/(tabs)/feed');
    } else {
      Alert.alert("Echec de la connexion", "Veuillez vérifier vos informations de connexion.");
    }
  }, [email, password, emailValid]);

  return {
    email, setEmail, emailValid, validateEmail,
    password, setPassword,
    onSubmit
  }

}

export default useLogIn;