import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
`

export const Aside = styled.div`
  min-width: 400px;
  max-width: 400px;
  padding: 20px;
`

export const Main = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 50px;
`

export const List: any = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

List.Item = styled.li`
  font-family: 'Ubuntu', sans-serif;
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;

  &:hover {
    cursor: pointer;
    background: #f1f1f1;
  }

  a {
    text-decoration: none;
    flex-grow: 1;
  }
`
