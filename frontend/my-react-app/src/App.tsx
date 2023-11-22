import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

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
            <Nav>
              <Link to="cart" className='nav-link text-p'>Cart</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  )
}

export default App
