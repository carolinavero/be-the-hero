import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

/* import { Button } from '../../styles.js'; */
import { LogoContainer, Col6 } from './styles.js';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Falha no login, tente novamente.')
        }

    }

    return(
       <LogoContainer>
           <Col6>
                <section className="form">
                    <img src={logoImg} alt="Logo" />
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu logon</h1>

                        <input
                            placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>

                        <Link to="/register" className="back-link">
                            <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                    </form>
                </section>
           </Col6>

           <Col6>
                <img src={heroesImg} alt="Heroes"/>
           </Col6>
           
       </LogoContainer>
    )
}