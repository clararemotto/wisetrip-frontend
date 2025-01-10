import React from 'react';
import { VStack, Input, Button, Text, Box, Image, Divider, HStack} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import '../../styles/style.css';
import returnButton from '../../../assets/images/return-button.png'; 
import appleButton from '../../../assets/images/apple-logo.png'; 
import googleButton from '../../../assets/images/google-logo.png'; 
import { Pressable } from 'react-native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <VStack style={{ backgroundColor: 'white' }} space={4} flex={1} px={4}>
      {/* <Box width="100%">
        <Button style={{ backgroundColor: 'white', justifyContent: 'flex-start' }} onPress={() => alert('Voltar')}>
          <Image source={returnButton} alt="Logo" />
        </Button>
      </Box> */}
      <Box width="100%" style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Cadastre-se</Text>
        <Text style={{ fontSize: 16, fontWeight: 'semibold' }}>Utilizando seus dados</Text>
      </Box>
      <Box width="100%" style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 12 }}>Nome completo <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 55, fontSize: 16 }} placeholder="Email" />
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Email <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 55, fontSize: 16 }} placeholder="Senha" type="password" />
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Senha <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 55, fontSize: 16 }} placeholder="Senha" type="password" />
      </Box>
      <Box width="100%">
        <Text style={{ fontSize: 12 }}>Confirme sua senha <Text style={{ color: 'red' }}>*</Text></Text>
        <Input className="input-placeholder" style={{ backgroundColor: '#EDEDED', width: '100%', height: 55
          , fontSize: 16 }} placeholder="Senha" type="password" />
      </Box>
      <Button style={{ backgroundColor: '#002955', width: '100%', height: 55, marginTop: 10}}  onPress={() => navigation.navigate('Dashboard')}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
      </Button>     
    </VStack>
  );
};

export default Signup;