//Importando Framework
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

import { FiMenu, FiSearch } from 'react-icons/fi'

export default function Talents() { 

  let [menuDrop, setMenuDrop] = useState(false)

  function menuDropDown(e) {
    e.preventDefault()

    setMenuDrop(menuDrop ? false : true)
  }

  return ( 
    <div className="container-talents">
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

      <div className="container-apresentacao">
        <h1>Jovens Talentos</h1>
        <p>Publique seu projeto hoje e de uma oportunidade aos jovens talentos.</p>
      </div>

      <div className="container-pesquisar">
        <div className="title-bar">
          <h4>Talentos</h4>
        </div>
        <input placeholder="Talentos..." type="search" id="bar-search" className="bar-search"/>
        <button className="search">
          <FiSearch size={30} color="#d6d6d6"/>
        </button>
      </div>

      <div className="container-conteudo">
        <div className="container-menu-coluna">
          <div className="menu">
            <h4>Atividade desejada</h4>
            <select className="categoria">
              <option value="">Escolha a atividade</option>
              <option value="">Programação TI</option>
              <option value="">Design e Fotográfia</option>
            </select>
            <h4>Habilidades desejada</h4>
            <select className="habilidades" multiple>
              <option value="Javascript">Javascript</option>
              <option value="C#">C</option>
              <option value="HTML">HTML</option>
              <option value="Photoshop">Photoshop</option>
              <option value="Adobe XD">Adobe XD</option>
            </select>
            <h4>Preço por hora:</h4>
            <div className="escolher-preco">
              <div className="preco-inicio">
                <span>R$</span>
                <input placeholder="0" type="text" className="preco"/>
              </div>
              <div className="preco-fim">
                <span>R$</span>
                <input placeholder="0" type="text" className="preco"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container-talentos">
          <div className="talento">talento 1</div>
        </div>
      </div>
    </div>
  )

}