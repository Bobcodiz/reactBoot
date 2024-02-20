import Form from "react-bootstrap/Form";
import {Row} from "react-bootstrap";


const Signup = ()=>{

    return (
        <>
            <Row>
                <Form as={Form} className="registrationForm">
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
                </Form>
            </Row>
        </>
    )

}
export default Signup;
