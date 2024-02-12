import Form from "react-bootstrap/Form";
import {Stack} from "react-bootstrap";

const Registration = () =>{
    return(
        <>

            <Stack gap={5}>
                <Form class="container-md">
                    <h2>Register Here</h2>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" placeholder="enter your name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>email</Form.Label>
                        <Form.Control size={"sm"} type="email" placeholder="enter your email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>phone</Form.Label>
                        <Form.Control size={"lg"} type="text" placeholder="enter phone"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password" placeholder="enter password"/>
                    </Form.Group>
                </Form>
            </Stack>

        </>
    )
}
export default Registration;
