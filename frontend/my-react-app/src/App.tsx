import { Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column vh-100 ">
      <header className="header">
        <Navbar expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="mx-auto pageTitle">
                Tasty Event Spot
              </Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  )
}

export default App
