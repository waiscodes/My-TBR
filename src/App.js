import logo from "./logo.svg";
import SignIn from "./views/SignIn.jsx";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <SignIn />
        </div>
      </Container>
    </>
  );
}

export default App;
