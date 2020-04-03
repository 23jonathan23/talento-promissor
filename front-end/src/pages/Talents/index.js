//Importando Framework
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

//Importando o css
import './styles.css'

//Importação de imagem para teste
import imgProfile from '../../assets/profile.jpg'

import { FiMenu, FiSearch, FiFilter } from 'react-icons/fi'

export default function Talents() {

  let [menuDrop, setMenuDrop] = useState(false)

  let [filterDrop, setFilterDrop] = useState(false)

  let [atividadeDrop, setAtividadeDrop] = useState(false)

  let [habilidadeDrop, setHabilidadeDrop] = useState(false)

  let [precoDrop, setPrecoDrop] = useState(false)

  function menuDropDown(e) {
    e.preventDefault()

    setMenuDrop(menuDrop ? false : true)
  }

  function filterDropDown(e) {
    e.preventDefault()

    setFilterDrop(filterDrop ? false : true)
  }

  function atividadeDropDown(e) {
    e.preventDefault()

    setAtividadeDrop(atividadeDrop ? false : true)
  }

  function habilidadeDropDown(e) {
    e.preventDefault()

    setHabilidadeDrop(habilidadeDrop ? false : true)
  }

  function precoDropDown(e) {
    e.preventDefault()

    setPrecoDrop(precoDrop ? false : true)
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

      <div className="container-menu-coluna-toggle">
          <button className="button-filtro" type="button" onClick={filterDropDown}>
            <p>FILTRO</p>
            <FiFilter size={25} color="#fff"/>
          </button>
          <div className="filtros" style={{maxHeight: filterDrop ? '365px' : '0px'}}>
            <div className="atividade">
              <h5 onClick={atividadeDropDown}>Atividade desejada</h5>
              <div className="selection-categoria" style={ {height: atividadeDrop ? '40px' : '0px'}}>
                <select className="categoria">
                  <option value="">Escolha a atividade</option>
                  <option value="">Programação TI</option>
                  <option value="">Design e Fotográfia</option>
                </select>
              </div>
            </div>

            <div className="habilidade-desejada">
              <h5 onClick={habilidadeDropDown}>Habilidades desejada</h5>
              <div className="selection-habilidade" style={ {height: habilidadeDrop ? '70px' : '0px'}}>
                <select className="habilidades" multiple>
                  <option value="Javascript">Javascript</option>
                  <option value="C#">C</option>
                  <option value="HTML">HTML</option>
                  <option value="Photoshop">Photoshop</option>
                  <option value="Adobe XD">Adobe XD</option>
                </select>
              </div>
            </div>

            <div className="preco-hora">
              <h5 onClick={precoDropDown}>Preço por hora:</h5>
              <div className="selection-preco" style={ {height: precoDrop ? '40px' : '0px'}}>
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
          </div>
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
          <div className="talento">
            <div className="informacoes-talento">
              <div className="profile-talento">
                <img className="imagem-profile" src={imgProfile} alt="Profile Talento"/>
              </div>
              <h4 className="name-profile">Ana Julia</h4>
              <p className="descricao-profile">Web Designer & Fotografa</p>
              <div className="classificacao">
                <p className="classificacao-profile">Classificação: </p>
                <p className="classificacao-nivel">Aprendendo</p>
              </div>
            </div>

            <div className="coluna-separador"></div>

            <div className="informacoes-talento-2">
              <div className="sobre-talento">
                <h4>Sobre:</h4>
                <p>Paixão por Web Design e Fotografia, estou aqui disposta a ajudar você a alcançar o seu objetivo.</p>
              </div>
              <div className="conhecer-talento">
                <div className="habilidades">
                  <h4>Habilidades:</h4>
                  <div className="skill-name">
                    <span>Photoshop</span>
                    <span>Ilustrator</span>
                    <span>Lightroom</span>
                  </div>
                </div>
                <div className="historico">
                    <h4 className="projetos">Projetos completos: <span className="projeto-value">6</span></h4>
                    <button className="button-conhecer" type="button">Conhecer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}