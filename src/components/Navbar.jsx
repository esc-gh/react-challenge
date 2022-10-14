import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import username from '../contexts/context';


function Nav() {

  const sharedUsername = useContext(username);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Welcome to React</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <b>{sharedUsername.user}</b>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;