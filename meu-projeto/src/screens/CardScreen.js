import React from 'react';
import { Text, Box, Card, Input } from 'native-base';

const CardScreen = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Para onde?</Text>
      <Box>
        <Text>Destino</Text>
        <Input placeholder="Digite o destino" />
      </Box>
      <Box>
        <Text>Data</Text>
        <Input placeholder="Digite o destino" />
      </Box>
      <Box>
        <Text>Horario</Text>
        <Input placeholder="Digite o destino" />
      </Box>
      <Box>
        <Text>Adicionar amigos</Text>
        <Input placeholder="Digite o destino" />
      </Box>
    </Box>
  );
};

export default CardScreen;