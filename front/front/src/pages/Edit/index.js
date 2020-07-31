import React, {useState, useEffect } from 'react'
import './styles.css'
import vivo from '../../assets/vivo.svg'
import { Link, useHistory  } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
import NavBar from '../Navbar';

export default function Update() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [numchip, setNumchip] = useState('');
    const [dtexp, setDtexp] = useState('');
    const [dtpag, setDtpag] = useState('');
    const [status, setStatus] = useState('');

    
    const history = useHistory();

    const loginId = localStorage.getItem('loginId');
    const localId = localStorage.getItem('id');

    useEffect(() => {
        api.get(`usuario/list/${localId}`)
        .then(response => {
        setNome(response.data[0].nome);
        setNumero(response.data[0].numero);
        setNumchip(response.data[0].numchip);
        setDtexp(response.data[0].dtexp);
        setDtpag(response.data[0].dtpag);
        setStatus(response.data[0].status);
    })
    }, [localId]);

    async function handleUpdate() {
        const data = ({
            nome, 
            numero,
            numchip, 
            dtexp, 
            dtpag, 
            status
        });
            try {
                console.log(data);
                await api.put(`usuario/${localId}`, data, {
                    headers: {
                        Authorization: loginId
                    }
                })
            } catch(err) {
                alert('Erro na atualização, tente novamente');
            }
            
    }

    return (
        <div>
            <NavBar/>
         <div className=".Edit-container">
          <div className="content">
            <section>
             <img  className="img" src={vivo} alt="Vivo Teste"/>
             <h1>Editar cadastro do usuário</h1>

             <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#2c2ce0"/>
                Voltar para o Home
            </Link>
            </section>
            
            
            <form onSubmit={handleUpdate}>

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
             <button className="button" type="submit">Atualizar</button>
            </form>
        </div>
      </div>
    </div>
    )
}