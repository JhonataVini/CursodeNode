import './styles.css';
import React, {useState} from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit3 } from 'react-icons/fi'
import { Button, Nav, Navbar, Form, Col, Image } from 'react-bootstrap';
import vivo from '../../assets/vivo.svg'

export default function NavBar() {
    const history = useHistory();
    const loginId = localStorage.getItem('loginId');
    const loginName = localStorage.getItem('loginName');

    async function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="Nav-bar">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/home">Home</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/profile">Usuários</Nav.Link>
                <Nav.Link href="/user/new">Cadastrar novo cliente</Nav.Link>
              </Nav>
              <Nav>
              <Col xs={3} md={2}>
                <Image 
                  width="200"
                  height="95" 
                  src={vivo} 
                  rounded />
                </Col>
              </Nav>

              <Form inline>
                <span className="mr-teste">Bem vindo, {loginName}</span>
                <Button onClick={handleLogout} type="button">
                 <FiPower text-align={"center"} size={20} color="#white"/>
                </Button>
              </Form>
            </Navbar>
        </div>
    );
}