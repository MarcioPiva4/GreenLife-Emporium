import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './style.module.scss';

import user from '../../assets/imgs/user.png';
import { useState } from 'react';
import OverlayLoading from '../OverlayLoading';

export default function FormularioLogin(){


    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState([]); // Sempre como uma matriz
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }

    const dados = {
        'email': email,
        'password': password
    }

    const handleFormEvent = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://127.0.0.1:8000/api/login', dados)
          .then(response => {
            navigate("/dashboard", { state: { responseData: response.data } }); 
          })
          .catch(error => {
            if (error.response) {
              setApiResponse([error]); // Sempre como uma matriz
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
    return(
        <div className={styles.register}>
            {isLoading && <OverlayLoading/>}
            {apiResponse.map((e, i) => (
              <h1 key={i} className={styles.register__msg}>{e.message}</h1>
            ))}
            <img src={user} alt='Contorno de uma pessoa'></img>
            <form onSubmit={handleFormEvent}>
                <label>Email:</label>
                <input type="email" onChange={handleInputEmail}/>

                <label>Senha:</label>
                <input type="password" onChange={handleInputPassword}/>
                <div>
                    <button type='submit'>Logar-se</button>
                </div>
            </form>
        </div>
    )
}