
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Seta from '../../assets/arrow.png';
import Clear from '../../assets/18297 4.svg';


import {
  Container,
  H1, 
  Image,
  Button,
  ContainerItens,
  User 
} from './styles';

function Users() {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()                                                                                                  

useEffect(() => {
    const fetchUsers = async () => {
    const {data:newUsers} = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);
  }

  fetchUsers()
},[])

  const deleteUser = async (userId) => {
  
  const newUsers = await axios.delete(`http://localhost:3001/users/${userId}`)


  setUsers(newUsers)
}


  return (

    <Container>
      < Image alt='logo-imagem' src={Avatar} />

      <ContainerItens >
      <H1> Usuários </H1>

      <ul>
        {users.map((user) => (
        <User key={user.id}>
         <p>{user.name}</p>  <p>{user.age}</p>
         <button onClick={() => deleteUser(user.id)}>
          <img src={Clear} alt="clear-user"/>
          </button>
        </User> 
        ))}
      </ul>
      
      <Button onClick={() => navigate("/")}>
      <img alt='Seta'src={Seta}/> Voltar  
      </Button>


      </ContainerItens >
    </Container>

  );
}

export default Users;