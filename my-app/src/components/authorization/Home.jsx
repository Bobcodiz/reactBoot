import {Container, Nav, Navbar, NavbarToggle, NavItem} from "react-bootstrap";
import Login from "./Login";
const Home = () =>
{
    return(<div>
        <Container>
        <Navbar>
            <NavbarToggle type={"reset"}/>
            <Nav>
                <Link to={"/login"}>Login</Link>
                <NavItem>Register</NavItem>
            </Nav>
        </Navbar>
        </Container>

    </div>);
}
export default  Home;
