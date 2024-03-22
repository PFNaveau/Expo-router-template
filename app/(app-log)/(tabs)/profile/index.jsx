import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
  const [image, setImage] = useState(null);

  const chooseImgSource = useCallback(() => {
    Alert.alert("Modifier votre image de profil", "Sélectionnez une option", [
      {
        text: "Annuler",
        onPress: () => { console.log("cancel") },
        style: 'cancel'
      },
      {
        text: "Ouvrir la caméra",
        onPress: openCamera,
      },
      {
        text: "Choisir une photo",
        onPress: pickImage,
      },
    ])
  }, []);

  const pickImage = useCallback(async () => {
    console.log("Pick Image trigger");
    let imagePicked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!imagePicked.canceled) {
      setImage(imagePicked.assets[0].uri);
    }
  }, [image]);

  const openCamera = useCallback(async () => {
    console.log("Camera trigger");
    await ImagePicker.requestCameraPermissionsAsync();
    if (await ImagePicker.getCameraPermissionsAsync()) {
      let imagePicked = await ImagePicker.launchCameraAsync({
        cameraType: 'front',
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!imagePicked.canceled) {
        setImage(imagePicked.assets[0].uri);
      }
    }

  }, [image]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User profile page</Text>
      <Pressable onPress={chooseImgSource}>
        <Image source={{ uri: image }} style={styles.profileImg} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20
  },
  profileImg: {
    width: 100,
    height: 100,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 50
  }
});

export default ProfilePage;