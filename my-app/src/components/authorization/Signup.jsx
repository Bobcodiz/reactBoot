import Form from "react-bootstrap/Form";
import {Button, Col, FloatingLabel, FormLabel, Row, Stack} from "react-bootstrap";
import "./SignupStyle.css"

const Signup = () => {
    return (
        <>

            <div className="form1">
                <Stack >
                    <Form>
                       <h2>Sign Up</h2>
                       <hr/>

                       <Form.Group >
                           <FloatingLabel label="username" >
                                <Form.Control type="text" required="true"/>
                           </FloatingLabel>
                       </Form.Group>
                        <Form.Group>
                            <FloatingLabel label="email">
                                <Form.Control type="emal"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel label="password">
                                <Form.Control type="password"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group>
                            <FloatingLabel label="confirm password">
                                <Form.Control type="password"/>
                            </FloatingLabel>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button type="submit" variant="primary" value="register">Register</Button>
                            </Col>
                            <Col>
                                <Button type="submit" variant="success" value="signIn">SignIn</Button>
                            </Col>
                        </Row>
                    </Form>
                </Stack>
            </div>

        </>
    )
}
export default Signup;
