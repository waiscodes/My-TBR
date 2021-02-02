import SignIn from "./views/SignIn.jsx";
import "./App.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className='d-flex align-items-center justify-content-center'
          style={{ minHeight: "100vh" }}
        >
          <div className='w-100' style={{ maxWidth: "400px" }}>
            <SignIn />
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
