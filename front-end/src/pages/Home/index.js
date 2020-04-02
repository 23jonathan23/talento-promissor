//Importando Framework
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

import { FiMenu } from 'react-icons/fi'

export default function Home() {

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
      <div className="container-como-funciona">
          <h2>Como funciona?</h2>

          <div className="container-card-toggle">
            <div className="card1-toggle">
              <h4>Publicar</h4>
              <p>Conte-nos em poucas palavras o que você precisa. É grátis e sem compromisso!</p>
            </div>
            <div className="card2-toggle">
              <h4>Selecionar</h4>
              <p>Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.</p>
            </div>
            <div className="card3-toggle">
              <h4>Começar</h4>
              <p>Você faz o pagamento com total garantia sobre o valor depositado e já começa a trabalhar :)</p>
            </div>
            <div className="card4-toggle">
              <h4>Aceitar</h4>
              <p>Receba o projeto concluído e libere o valor depositado ao freelancer.</p>
            </div>
          </div>

          <div className="container-card">
            <div className="card1">
              <h4>Publicar</h4>
              <p>Conte-nos em poucas palavras o que você precisa. É grátis e sem compromisso!</p>
            </div>
            <div className="card2">
              <h4>Selecionar</h4>
              <p>Receba propostas de excelentes freelancers. Escolha o melhor para o seu projeto.</p>
            </div>
            <div className="card3">
              <h4>Começar</h4>
              <p>Você faz o pagamento com total garantia sobre o valor depositado e já começa a trabalhar :)</p>
            </div>
            <div className="card4">
              <h4>Aceitar</h4>
              <p>Receba o projeto concluído e libere o valor depositado ao freelancer.</p>
            </div>
          </div>

          <div className="option">
            <button className="button" 
                      type="button">PUBLIQUE UM PROJETO</button>
            <button className="button" 
                      type="button">SEJA UM TALENTO</button>
          </div>
      </div>
    </div>
  )
}