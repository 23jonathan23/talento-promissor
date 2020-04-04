//Importando Framework
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

//Importação de imagem para teste
import imgCliente from '../../assets/cliente.jpg'

import { FiMenu, FiSearch } from 'react-icons/fi'

export default function Project() { 

  let [menuDropProjeto, setMenuDropProjeto] = useState(false)

  function menuDropProjetoDown(e) {
    e.preventDefault()

    setMenuDropProjeto(menuDropProjeto ? false : true)
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

      <nav className="container-menu-toggle" style={ {height: menuDropProjeto ? '100%' : '70px'}}>
        <Link className="nome-logo" to="/"><strong>TALENTO <span>PROMISSOR</span></strong></Link>

        <div className="menu-navegacao-toggle" style={ {display: menuDropProjeto ? 'block' : 'none'}}>
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
        <button className="menu-toggle" type="button" onClick={menuDropProjetoDown}>
          <FiMenu size={35} color="#fff"/>
        </button>
      </nav>

      <div className="container-apresentacao-projetos">
        <h1>Projetos publicados</h1>
        <p>Registre-se e torne-se um jovem talento hoje, e bora ganha dinheiro!</p>
      </div>

      <div className="container-pesquisar-projetos">
        <div className="title-bar-projetos">
          <h4>Projetos</h4>
        </div>
        <input placeholder="Projetos..." type="search" id="bar-search-projetos" className="bar-search-projetos"/>
        <button className="search-projetos">
          <FiSearch size={30} color="#d6d6d6"/>
        </button>
      </div>

      <div className="container-conteudo-projetos">
        <div className="container-menu-coluna-projetos">
          <div className="menu-projetos">
            <h4>Categoria de projeto</h4>
            <select className="categoria-projetos">
              <option value="">Escolha a categoria</option>
              <option value="">Programação TI</option>
              <option value="">Design e Fotográfia</option>
            </select>
            <h4>Habilidades necessárias</h4>
            <select className="habilidades-projetos" multiple>
              <option value="Javascript">Javascript</option>
              <option value="C#">C</option>
              <option value="HTML">HTML</option>
              <option value="Photoshop">Photoshop</option>
              <option value="Adobe XD">Adobe XD</option>
            </select>
            <h4>Modalidade de trabalho</h4>
            <div className="escolher-modalidade-projetos">
              <div className="group-modalidade-projetos">
                <input name="modalidade-projetos" value="todas" type="radio" className="radio-modalidade-projetos"/>
                <label>Todas</label>
              </div>
              <div className="group-modalidade-projetos">
                <input name="modalidade-projetos" value="fixo" type="radio" className="radio-modalidade-projetos"/>
                <label>Preço fixo</label>
              </div>
              <div className="group-modalidade-projetos">
                <input name="modalidade-projetos" value="hora" type="radio" className="radio-modalidade-projetos"/>
                <label>Por hora</label>
              </div>
            </div>
          </div>
        </div>
        <div className="container-projetos">
          <div className="projeto">
            <div className="informacoes-projeto">
              <h2 className="titulo-projeto">Criação de capas para rede social</h2>
              <div className="status-publicacao-projeto">
                <h4>Publicado: <span>há 8 horas</span></h4>
              </div>
              <div className="descricao-projeto">
                <h4>Descrição do Projeto:</h4>
                <p className="descricao-p-projetos">Preciso de um jovem para desenvolver capas para redes sociais da WebPOKET, busco uma pessoa criativa e competente</p>
              </div>
              <div className="categoria-projeto">
                <h4>Categoria: <span>Design & Multimedia</span></h4>
              </div>
              <div className="habilidades-projetos">
                  <h4>Habilidades necessárias:</h4>
                  <div className="skill-name-projetos">
                    <span>Photoshop</span>
                    <span>Ilustrator</span>
                    <span>Lightroom</span>
                  </div>
                </div>
            </div>

            <div className="coluna-separador-projeto"></div>

            <div className="informacoes-projeto-2">
              <div className="profile-cliente-projetos">
                <div className="imagem-moldura-projetos">
                  <img className="imagem-cliente-projetos" src={imgCliente} alt="Imagem Cliente"/>
                </div>
                <div className="informacao-cliente-projetos">
                  <h4 className="name-cliente-projetos">Carlos Eduardo</h4>
                  <p className="descricao-cliente-projetos">CEO na WebPOKET</p>
                </div>
              </div>
              <div className="projetos-publicados">
                <h4>Projetos publicados: <span>10</span></h4>
              </div>
              <div className="projetos-ativos">
                <h4>Projetos ativos: <span>4</span></h4>
              </div>
              <div className="conhecer-projeto">
                  <p className="preco-projeto">R$ <span>100</span> até <span>500</span></p>
                  <button className="button-saiba-mais-projetos" type="button">Saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}