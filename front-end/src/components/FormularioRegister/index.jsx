import React, { useState } from 'react';
import styles from './style.module.scss';

import { useNavigate } from 'react-router-dom';
import user from '../../assets/imgs/user.png';
import axios from 'axios';
import OverlayLoading from '../OverlayLoading';

export default function FormularioRegister() {
    const navigate = useNavigate();

    const [valueName, SetValueName] = useState("");
    const [valueEmail, SetValueEmail] = useState("");
    const [valuePassword, SetValuePassword] = useState("");
    const dados = {
      'name': valueName,
      'email': valueEmail,
      'password': valuePassword
    };
  
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState([]); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      axios.post('http://127.0.0.1:8000/api/register', dados)
        .then(response => {
          navigate("/dashboard")
          console.log(response.data);
        })
        .catch(error => {
          if (error.response) {
            setApiResponse([error.response.data]); // Sempre como uma matriz
            console.error('Erro na resposta da API: ', error.response.data);
          } else {
            setApiResponse([error]); // Sempre como uma matriz
            console.error('Erro na requisição: ', error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  
    return (
      <div className={styles.register}>
        {isLoading && <OverlayLoading resposta={apiResponse} />}
        {apiResponse.map((e, i) => (
          <h1 key={i} className={styles.register__msg}>{e.message}</h1>
        ))}
        <img src={user} alt='Contorno de uma pessoa' />
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" onChange={e => SetValueName(e.target.value)} />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={e => SetValueEmail(e.target.value)} />
  
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" onChange={e => SetValuePassword(e.target.value)} />
  
          <div>
            <button type='submit'>registrar-se</button>
          </div>
        </form>
      </div>
    )
  }
  
