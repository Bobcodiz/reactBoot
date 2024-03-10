import {Container} from "react-bootstrap";
import Home from "./components/authorization/Home";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="App">
        {/*<Registration/>*/}
        <Container >
          <UseStateHook/>     
        </Container>

    </div>
  );
}

export default App;
