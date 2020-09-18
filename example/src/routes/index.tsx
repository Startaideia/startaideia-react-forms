import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Container, Aside, Main, List } from './styles'
import { SimpleForm, EditorForm, SelectForm } from '../pages'

function Routes() {
  return (
    <Container>
      <Aside>
        <List>
          <List.Item>
            <Link to='/'>Formulário Simples</Link>
          </List.Item>
          <List.Item>
            <Link to='/editores'>Editores</Link>
          </List.Item>
          <List.Item>
            <Link to='/seletores'>Seletores</Link>
          </List.Item>
        </List>
      </Aside>
      <Main>
        <Switch>
          <Route path='/' component={SimpleForm} exact />
          <Route path='/editores' component={EditorForm} exact />
          <Route path='/seletores' component={SelectForm} exact />
        </Switch>
      </Main>
    </Container>
  )
}

export default Routes
