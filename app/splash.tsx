import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

const Splash = () => {
  const router = useRouter();

  return (
    <ImageBackground source={require("../assets/images/bg.jpg")} style={styles.background} resizeMode="cover">
    
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Image 
          source={require('../assets/images/antslogo.png')}  
          style={styles.logo} 
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,                 // 🔹 Full-screen background
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;
