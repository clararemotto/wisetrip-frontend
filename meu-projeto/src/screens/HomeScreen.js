import React from 'react';
import { Text, Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import GoogleButton from '../../assets/images/google-logo.png';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg='blue.500'>
      <Image source={GoogleButton} alt="Logo" />
      <Box width={300} height={300} bg="white" justifyContent="center" alignItems="center" borderTopRadius={10} p={4}>
        <Box>
          <Text>Bem-vindo!</Text>
          <Text>Como deseja acessar?</Text>
        </Box>
        <Button onPress={() => navigation.navigate('Login') }><Image source={GoogleButton} alt="Logo" />Entrar com o Google</Button>
        <Button onPress={() => navigation.navigate('Login') }>Outras formas</Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;