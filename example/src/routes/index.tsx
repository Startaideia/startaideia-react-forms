import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Container, Aside, Main, List } from './styles'
import { SimpleForm } from '../pages'

function Routes() {
  return (
    <Container>
      <Aside>
        <List>
          <List.Item>
            <Link to='/'>Formulário Simples</Link>
          </List.Item>
        </List>
      </Aside>
      <Main>
        <Switch>
          <Route path='' component={SimpleForm} exact />
        </Switch>
      </Main>
    </Container>
  )
}

export default Routes
