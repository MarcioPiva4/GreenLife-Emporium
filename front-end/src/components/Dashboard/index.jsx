import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.scss'

import axios from 'axios';
import { useState } from 'react';
import OverlayLoading from '../OverlayLoading';
export default function DashboardUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state && location.state.responseData; 

  const [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `${responseData}`,
    },
  };

  const userExit = () => {
    setIsLoading(true)
    axios.post("http://127.0.0.1:8000/api/logout",  config)
  .then(response => {
    navigate("/")
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro no logout: ', error);
  }).finally(() => {
    setIsLoading(false);
  });;
  }

  return (
    <div>
       {isLoading && <OverlayLoading/>}
      <h1 onClick={userExit} className={styles.title}>sair</h1>
    </div>
  )
}
