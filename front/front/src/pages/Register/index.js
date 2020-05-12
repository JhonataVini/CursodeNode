import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import vivo from '../../assets/vivo.svg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

   async function handleRegister (e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp
        };
    try {
        const response =  await api.post('login', data);
    
        alert(`Seu ID de Acesso: ${response.data.id}`);

        history.push('/')
    } catch (err) {
        alert('Erro no cadastro, Tente novamente');
    }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                 <img  className="img" src={vivo} alt="Vivo Teste"/>
                 <h1>Cadastro</h1>
                 <p>Faça o seu cadastro</p>

                 <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#2c2ce0"/>
                    Tenho cadastro
                </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="Whatsapp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}