import { Container, Form } from "react-bootstrap";


export default function login(){
    return(
        <>
            <Container>
                <Form as={Form} className="loginform">
                    <Form.Label>first name</Form.Label>
                    <Form.Control type="text" placeholder="first name"/>
                </Form>
            </Container>
        </>
    )
}