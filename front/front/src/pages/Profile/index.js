
import React, { useState ,useEffect } from 'react';
import './styles.css';
import vivo from '../../assets/vivo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit3 } from 'react-icons/fi';
import api from '../../services/api';
import moment from "moment";
import NavBar from '../Navbar';
import Table from 'react-bootstrap/Table'

export default function Profile() {
    const [usuario, setUsuario] = useState([]);
    const history = useHistory();

    const loginId = localStorage.getItem('loginId');
    const loginName = localStorage.getItem('loginName');


    useEffect(() => {
        api.get('profile', {
        headers: {Authorization: loginId,
        }
    }).then(response => {
        setUsuario(response.data);
    })
    }, [loginId]);

   
        //Deletar
     async function handleDelete(id) {
        try {
            await api.delete(`/usuario/${id}`, {
                headers: {
                    Authorization: loginId
                }
            })
            setUsuario(usuario.filter(user => user.id !== id));
        } catch (error) {
            alert('Erro ao deletar o usuario, tente novamente');
        }
    }

    async function Editar(id) {
            localStorage.setItem('id',id);
            history.push(`/user/edit`);
            console.log(id)
    }

    //Sair
    // async function handleLogout() {
    //     localStorage.clear();
    //     history.push('/');
    // }

    var agora = moment(new Date(), "DD/MM/YYYY");
    const sortedUsers = usuario.sort((user) => (moment(user.dtpag, "DD/MM/YYYY").diff(agora, "days")));
const dataval = sortedUsers.dtpag


    var s = document.getElementsByTagName('tbody');
    for (var i = 0; i < s.length; i++) {
        if (s[i].getAttribute(dataval) === agora) {
            if(dataval === (dataval > 15) ){
                s.style.color="green"
            }else if( dataval === (dataval < 6 && dataval > 1)){
                s.stayle.color="yellow"
            }else if(dataval === (dataval < 1) ){
                s.stayle.color="red"
            }
        }
    }



return (
    <div>
        <NavBar/>
    <div className="profile-container">
        <header>
         {/* <img  className="img" src={vivo} alt="Vivo Teste"/> */}
         <h1 className="Teste">Usuários cadastrados</h1>
         <Link className="button" to="/user/new"> Cadastrar novo cliente</Link>
        </header>
        <div class="container">
        <div class="container scroll">
          <Table striped bordered hover size="lg">
            <thead>
              <tr >    
              <th>Nome</th>
              <th>Numero</th>
              <th>Numero do Chip</th>
              <th>Data dos Creditos</th>
              <th>Data Pagamento</th>
              <th>Status</th>
              <th>Excluir</th>
              <th>Editar</th></tr>
            </thead>
            {sortedUsers.map(user => (
            <tbody>
             <tr key={user.id}> 
                <td >
                 {user.nome}</td>
                <td>
                 {user.numero}</td>
                <td>
                 {user.numchip}</td>
                <td>
                 {user.dtexp}</td>
                <td>
                 {user.dtpag}</td>
                <td>
                 {user.status}</td>
                <td>
                 <button onClick={() => handleDelete(user.id)} type="button">
                 <FiTrash2 size={20} color="#a8a8b3"/>
                 </button></td>
                <td>
                 <button type="button">
                 <FiEdit3 onClick={ () => Editar(user.id)} size={20} color="#a8a8b3"/>
                 </button>
                </td>
             </tr>
              </tbody>
              )
              )}
          </Table>
        </div>
      </div>
    </div>
    </div>
);
}