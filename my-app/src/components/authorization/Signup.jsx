import Form from "react-bootstrap/Form";
import {Button, Row} from "react-bootstrap";
import "./SignupStyle.css"

const Signup = ()=>{

    return (
        <>
            <Row as={"div"} className="reg">
                <Form as={Form} className="registrationForm" >
                    <h3 className= "registrationHeader">SignUp</h3>
                    <hr/>
                    <Form.Group>
                        <Form.Label>
                            username
                        </Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            email
                        </Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            password
                        </Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <hr/>
                    <Button variant="primary" type={"submit"}>Signup</Button>
                    <p>Already have an account?Login</p>
                </Form>
            </Row>
        </>
    )

}
export default Signup;
