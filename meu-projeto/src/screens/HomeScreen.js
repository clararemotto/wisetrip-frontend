import React, { useEffect, useState } from 'react';
import { Text, Box, Button, Image, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import GoogleButton from '../../assets/images/google-logo.png';
import { ButtonLogin } from '../components/Button';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { startOAuthFlow, setActive } = useOAuth({ strategy: "oauth_google" });

  useEffect(() => {
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  async function onGoogleLogin() {
    try {
      setIsLoading(true);
      const oAuthFlow = await startOAuthFlow();

      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (setActive) {
          await setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center" style={{ backgroundColor: '#002955' }}>
      <Box minWidth={'100%'} height={350} bg="white" justifyContent="center" alignItems="center" borderTopRadius={20} position="absolute" bottom="0%" p={2}>
        <Box style={{ height: 'auto',  width: '90%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bem-vindo!</Text>
          <Text style={{ fontSize: 16, fontWeight: 'semibold' }}>Como deseja acessar?</Text>
        </Box>
        <Box style={{ marginTop: 20, width: '90%' }}>
          <ButtonLogin icon="logo-google" title="Entrar com o Google" onPress={onGoogleLogin} isLoading={isLoading} />
          <Button style={{ backgroundColor: '#002955', width: '100%', height: 55, marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: 'white' }}>Outras formas</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;