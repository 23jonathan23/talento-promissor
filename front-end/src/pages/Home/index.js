//Importando Framework
import React from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

export default function Home() {

  return (
    <div className="container-home">
      <nav className="container-menu">
        <div className="menu-navegacao">
        <ul>
          <li>
            <Link className="item-menu" to="/talents">Nossos Talentos</Link>
            <Link className="item-menu" to="/project">Projetos</Link>
            <Link className="item-menu" to="/">Como funciona</Link>
          </li>
        </ul>
        </div>

        <div className="login-menu">
        <ul>
          <li>
            <Link className="item-menu" to="/">Cadastre-se</Link>
            <Link className="item-menu" to="/">Entre</Link>
            <button className="button" 
                    type="button">PUBLIQUE UM PROJETO</button>
          </li>
        </ul>
        </div>
      </nav>
      <div className="slide">
        <div className="descricao">
          <p>Jovens Talentos &</p>
          <p>Cheios de vida &</p>
          <p>Vontade de trabalhar.</p>
          <div className="option">
            <button className="button" 
                      type="button">PUBLIQUE UM PROJETO</button>
            <button className="button" 
                      type="button">SEJA UM TALENTO</button>
          </div>
        </div>
      </div>
    </div>
  )
}