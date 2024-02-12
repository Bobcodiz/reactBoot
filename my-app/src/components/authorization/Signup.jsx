import Form from "react-bootstrap/Form";
import {FormLabel, Stack} from "react-bootstrap";
import {Row} from "react-bootstrap";


const Signup = () => {
    return (
        <>

            <div className="form1">
                <Stack >
                    <Form>
                        <Form.Group >
                            <FormLabel as={"label"} label="username"/>
                            <Form.Control type="text" placeholder="username"/>
                        </Form.Group>
                        <Form.Group>
                            <FormLabel as={"label"} label="email"/>
                            <Form.Control type="email" placeholder="email"/>
                        </Form.Group>
                        <fieldset>
                            <legend>additional datails</legend>
                            <Form.Group>
                                <Form.Control type="textarea"/>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Stack>
            </div>

        </>
    )
}
export default Signup;
