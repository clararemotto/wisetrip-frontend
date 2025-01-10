import React from 'react';
import { VStack, Input, Button, Text, Box, Image, Divider, HStack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import '../../styles/style.css';
import returnButton from '../../../assets/images/return-button.png'; 
import appleButton from '../../../assets/images/apple-logo.png'; 
import googleButton from '../../../assets/images/google-logo.png'; 
import { Pressable } from 'react-native';

const Login = () => {

  const navigation = useNavigation();
  return (
    <VStack style={{ backgroundColor: 'white' }} space={4} flex={1} px={4}>
      {/* <Box width="100%">
        <Button style={{ backgroundColor: 'white', justifyContent: 'flex-start' }} onPress={() => alert('Voltar')}>
          <Image source={returnButton} alt="Logo" />
        </Button>
      </Box> */}
      <Box width="100%" style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Acesse</Text>
        <Text style={{ fontSize: 16, fontWeight: 'semibold' }}>Utilizando seu email e senha</Text>
      </Box>
      <Box width="100%" style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 12 }}>Email <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 52, fontSize: 16 }} placeholder="Email" />
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Senha <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 52, fontSize: 16 }} placeholder="Senha" type="password" />
      </Box>
      <Button style={{ backgroundColor: '#002955', width: '100%', height: 55, marginTop: 10}}  onPress={() => navigation.navigate('Dashboard')}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login</Text>
      </Button>
      <Box width="100%" style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 12, textDecorationLine: 'underline' }}>Esqueceu sua senha?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')} >
          <Text style={{ fontSize: 12, textDecorationLine: 'underline' }}>Cadastre-se</Text>
        </Pressable>
      </Box>
      <Box width="100%" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <HStack alignItems="center" width="100%">
          <Divider style={{ flex: 1, backgroundColor: '#002955' }} />
          <Text style={{ marginHorizontal: 10, fontSize: 12 }}>ou continue com:</Text>
          <Divider style={{ flex: 1, backgroundColor: '#002955' }} />
        </HStack>
        <Box style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20}}>
          <Button style={{ backgroundColor: 'white', marginRight: 10 }} onPress={() => alert('Google')}>
             <Image source={googleButton} alt="Logo" />
          </Button>
          <Button style={{ backgroundColor: 'white' }} onPress={() => alert('Apple')}>
            <Image source={appleButton} alt="Logo" />
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};

export default Login;