import {Container} from "react-bootstrap";
import Home from "./components/authorization/Home";
import UseStateHook from "./components/UseStateHook";
import UseStateTwo from "./components/UseStateTwo";

function App() {
  return (
    <div className="App">
        {/*<Registration/>*/}
        <Container >
          <UseStateTwo/>  
        </Container>

    </div>
  );
}

export default App;
