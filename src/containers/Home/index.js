
import React,{useState, useRef} from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import People from '../../assets/people.svg'
import Seta from '../../assets/arrow.png'

import {
  Container,
  H1, 
  Image,
  Input, 
  InputLabel, 
  Button,
  ContainerItens, 
  InputNumber 
} from './styles'

  const App = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = async () => {
  const {data: newUser} = await axios.post("http://localhost:3001/users",{
    name:inputName.current.value,
    age: inputAge.current.value,
  })
  setUsers([...users, newUser])
  navigate("/users")
}

  return (

    <Container>
      < Image alt='logo-imagem' src={People} />

      <ContainerItens >
      <H1>Olá</H1>

      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder='Nome' />

      <InputLabel>Idade</InputLabel>
      <InputNumber ref={inputAge} placeholder='Idade' type='number'/>

      <Button onClick={addNewUser}>
        Cadastrar  <img alt='Seta'src={Seta}/>
      </Button>

      </ContainerItens >
    </Container>

  );
}

export default App