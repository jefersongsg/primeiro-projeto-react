
import React from 'react';

import People from './assets/people.svg'

import Seta from './assets/arrow.png'

import { Container, H1, Image, Input, InputLabel, Button, ContainerItens } from './styles';

const App = () => {

  return (

    <Container>
      < Image alt='logo-imagem' src={People} />

      <ContainerItens >
      <H1>Olá</H1>

      <InputLabel>Nome</InputLabel>
      <Input placeholder='Nome' />

      <InputLabel>Idade</InputLabel>
      <Input placeholder='Idade' />

      <Button>Cadastrar<img alt='Seta'src={Seta}/></Button>

      </ContainerItens >
    </Container>

  );
}

export default App;