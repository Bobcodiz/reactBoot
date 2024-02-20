import Form from "react-bootstrap/Form";
import "./SignupStyle.css"
import {Button, Row} from "react-bootstrap";
import reg from "../Reg";

const Login = ()=>{
    return(
        <>
            <Row as={"div"} className="reg">
                <Form>
                    <h2>LogIn</h2>
                    <hr/>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <hr/>
                    <Button variant="success" type="submit">LogIn</Button>
                </Form>
            </Row>
        </>
    )
}
export default Login;
