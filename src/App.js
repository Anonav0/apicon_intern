
import './App.css';

//importing bootstrap.
import { Container,Navbar, Button, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

//importing the icon from font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUsers} size="4x" />

function App() {
  return (
    <div className="App">

      <Navbar>
        <Container>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Button>Create security group</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>

        <Row>
          <Col  md={4} className="padding">
            <Card className="shadow" >
              <Card.Body>
                <Card.Title className="padding-bottom" >Admin Group</Card.Title>
                
                <p>{element}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={4} className="padding">
            <Card className="shadow" >
              <Card.Body>
                <Card.Title className="padding-bottom" >Managers</Card.Title>
                
                <p>{element}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={4} className="padding">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="padding-bottom" >Sales Team</Card.Title>
                
                <p>{element}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={4} className="padding">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="padding-bottom" >HR Team</Card.Title>
                
                <p>{element}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={4} className="padding">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="padding-bottom">IT Team</Card.Title>
                
                <p s>{element}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={4} className="padding">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="padding-bottom">Production Team</Card.Title>
                
                <p>{element}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default App;
