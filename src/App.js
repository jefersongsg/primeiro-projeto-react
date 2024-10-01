
import React from 'react';

import People from './assets/people.svg'

import Seta from './assets/arrow.png'

import Clear from './assets/18297 4.svg'

import { Container, H1, Image, Input, InputLabel, Button, ContainerItens, User, InputNumber } from './styles';

const App = () => {

  const users = [
    {id:Math.random(),name:"Jeferson",age:28},
    {id:Math.random(),name:"Maria",age:38},
  ];

  return (

    <Container>
      < Image alt='logo-imagem' src={People} />

      <ContainerItens >
      <H1>Olá</H1>

      <InputLabel>Nome</InputLabel>
      <Input placeholder='Nome' />

      <InputLabel>Idade</InputLabel>
      <InputNumber placeholder='Idade' type='number'/>

      <Button>Cadastrar<img alt='Seta'src={Seta}/>
      </Button>

      <ul>
        {users.map((user) => (
        <User key={user.id} >
         <p>{user.name}</p>  <p>{user.age}</p>
         <button><img src={Clear} alt="clear-user" /></button>
        </User> 
        ))}
      </ul>

      </ContainerItens >
    </Container>

  );
}

export default App;