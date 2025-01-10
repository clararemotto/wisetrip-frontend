import React from 'react';
import { VStack, Input, Button, Text, Box, Image } from 'native-base';
import '../../styles/style.css';
import returnButton from '../../../assets/images/return-button.png'; // Certifique-se de que o caminho está correto

const Login = () => {
  return (
    <VStack style={{ backgroundColor: 'white' }} alignItems="center" justifyContent="center" space={4} flex={1} px={4}>
      <Box width="100%">
        <Button style={{ backgroundColor: 'white' }}>
          <Image source={returnButton} alt="Logo"  />
        </Button>
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Acesse</Text>
        <Text style={{ fontSize: 16, fontWeight: 'semibold' }}>Utilizando seu email e senha</Text>
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Email <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 62, fontSize: 16 }} placeholder="Email" />
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Senha <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 62, fontSize: 16 }} placeholder="Senha" type="password" />
      </Box>
      <Button style={{ backgroundColor: '#002952', width: '100%', height: 55 }} onPress={() => alert('Login')}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Login</Text>
      </Button>
    </VStack>
  );
};

export default Login;