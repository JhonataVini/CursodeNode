import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api'

import vivo from '../../assets/vivo.svg'
import vivo2 from '../../assets/paravc.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

   async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('loginId', id);
            localStorage.setItem('loginName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no Login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
            <img  className="img" src={vivo} alt="Vivo Teste"/>

            <form onSubmit={handleLogin}>
                <h1>faça o seu logon</h1>
                <input 
                type="text" 
                placeholder="Seu ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#2c2ce0"/>
                    Não tenho cadastro
                </Link>
            </form>
            </section>
            <img src={vivo2} className="img" alt="Vivo Teste"/>
        </div>
    );
}