//Importando Framework
import React from 'react'

import 'react-dom'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

import { FiMenu } from 'react-icons/fi'

export default function Home() {

  function menuDropDown(e) {
    e.preventDefault()
  }

  return (
    <div className="container-home">
      <nav id="menu" className="container-menu">
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
        <button className="menu-toggle" type="button" onClick={menuDropDown}>
          <FiMenu size={35} color="#fff"/>
        </button>
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