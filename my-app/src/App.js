import {Container} from "react-bootstrap";
import Registration from "./components/Registration";
import Signup from "./components/authorization/Signup";

function App() {
  return (
    <div className="App">
        {/*<Registration/>*/}
        <Container>
            <Signup/>
        </Container>
    </div>
  );
}

export default App;
