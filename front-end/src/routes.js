import React from 'react'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

//Importação da paginas
import Home from './pages/Home'
import Talents from './pages/Talents'
import Project from './pages/Project'

export default function Routes() {
  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/talents" exact component={Talents}/>
          <Route path="/project" exact component={Project}/>
        </Switch>
    </BrowserRouter>
  )
}