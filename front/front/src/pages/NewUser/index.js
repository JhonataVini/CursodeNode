import React, {useState} from 'react'
import './styles.css'
import vivo from '../../assets/vivo.svg'
import { Link, useHistory  } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function NewUser() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [numchip, setNumchip] = useState('');
    const [dtexp, setDtexp] = useState('');
    const [dtpag, setDtpag] = useState('');
    const [status, setStatus] = useState('');
    
    const history = useHistory();

    const loginId = localStorage.getItem('loginId');

    async function handleNewUser(e) {
        e.preventDefault();

        const data = { 
            nome,
            numero,
            numchip,
            dtexp,
            dtpag,
            status
        };
        try {
            await api.post('usuario', data, {
                headers: {
                    Authorization: loginId
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao criar o usuario, tente novamente')
        }

    }

    return (
        <div className=".new-user-container">
        <div className="content">
            <section>
             <img  className="img" src={vivo} alt="Vivo Teste"/>
             <h1>Cadastro de usuário</h1>
             <p>Faça o cadastro das pessoas que você tem na sua linha</p>

             <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#2c2ce0"/>
                Voltar para o Home
            </Link>
            </section>

            <form onSubmit={handleNewUser}>
                <input type="text" 
                placeholder="Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                />

                <input type="text" 
                placeholder="Numero"
                value={numero}
                onChange={e => setNumero(e.target.value)}
                />

                <input type="text" 
                placeholder="Numero do chip"
                value={numchip}
                onChange={e => setNumchip(e.target.value)}
                />

                <div className="input-group">
                  <input type="text"   
                  placeholder="Data de expiração dos créditos"
                   style={{width: 300}}
                   value={dtexp}
                   onChange={e => setDtexp(e.target.value)}
                />
                  <input type="text" 
                  placeholder="Data de pagamento"
                   style={{width: 300}}
                   value={dtpag}
                   onChange={e => setDtpag(e.target.value)}
                   />
                  <input type="text" 
                  placeholder="Status"
                   style={{ width: 170 }}
                   value={status}
                    onChange={e => setStatus(e.target.value)}
                   />
                </div>
             <button className="button" type="submit">Cadastrar</button>
            </form>
           </div>
    </div>
    )
}