//Importando Framework
import React from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

import menuSVG from '../../assets/menu.svg'

export default function Home() {

  return (
    <div className="container-home">
      <nav className="container-menu">
        <strong>TALENTO <span>PROMISSOR</span></strong>
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
        <div className="menu-toggle">
          <img src={menuSVG} height="30px" alt="Menu Toogle"/>
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