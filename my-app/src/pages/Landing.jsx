import { Container, Nav } from "react-bootstrap";


export default function Landing(){
    return(
        <>
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>LogIn</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </>
    )
}