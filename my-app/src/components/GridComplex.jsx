import Form  from "react-bootstrap/Form";
import {FormText} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const GridComplex =() =>{
    return(
        <>

            <Form>
                <Row className="mb-2">
                    <Form.Group as={Col}>
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" placeholder="name"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="email"/>
                    </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                    <FormText>use a strong password please!</FormText>
                </Form.Group>
            </Form>

        </>
    )

}
export default GridComplex;
