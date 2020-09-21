import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { Container, Aside, Main, List } from './styles'
import { SimpleForm, EditorForm, SelectForm, DateForm } from '../pages'
import GroupForm from '../pages/GroupForm'

function Routes() {
  const history = useHistory()

  function handleNavigate(path: string) {
    return function () {
      history.push(path)
    }
  }

  return (
    <Container>
      <Aside>
        <List>
          <List.Item onClick={handleNavigate('/')}>
            Formulário Simples
          </List.Item>
          <List.Item onClick={handleNavigate('/editores')}>Editores</List.Item>
          <List.Item onClick={handleNavigate('/seletores')}>
            Seletores
          </List.Item>
          <List.Item onClick={handleNavigate('/grupos')}>Grupos</List.Item>
          <List.Item onClick={handleNavigate('/datas')}>Datas</List.Item>
        </List>
      </Aside>
      <Main>
        <Switch>
          <Route path='/' component={SimpleForm} exact />
          <Route path='/editores' component={EditorForm} exact />
          <Route path='/seletores' component={SelectForm} exact />
          <Route path='/grupos' component={GroupForm} exact />
          <Route path='/datas' component={DateForm} exact />
        </Switch>
      </Main>
    </Container>
  )
}

export default Routes
