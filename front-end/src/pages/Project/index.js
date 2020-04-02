//Importando Framework
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

import { FiMenu } from 'react-icons/fi'

export default function Project() { 

  let [menuDrop, setMenuDrop] = useState(false)

  function menuDropDown(e) {
    e.preventDefault()

    setMenuDrop(menuDrop ? false : true)
  }

  return ( 
    <div className="container-home">
      <nav className="container-menu">
        <Link className="nome-logo" to="/"><strong>TALENTO <span>PROMISSOR</span></strong></Link>

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

      <nav className="container-menu-toggle" style={ {height: menuDrop ? '100%' : '70px'}}>
        <Link className="nome-logo" to="/"><strong>TALENTO <span>PROMISSOR</span></strong></Link>

        <div className="menu-navegacao-toggle" style={ {display: menuDrop ? 'block' : 'none'}}>
        <ul>
          <li>
            <Link className="item-menu" to="/talents">Nossos Talentos</Link>
            <Link className="item-menu" to="/project">Projetos</Link>
            <Link className="item-menu" to="/">Como funciona</Link>
            <Link className="item-menu" to="/">Cadastre-se</Link>
            <Link className="item-menu" to="/">Entrar</Link>
          </li>
        </ul>
        </div>
        <button className="menu-toggle" type="button" onClick={menuDropDown}>
          <FiMenu size={35} color="#fff"/>
        </button>
      </nav>
    </div>
  )

}