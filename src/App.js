import SignIn from "./views/SignIn.jsx";
import "./App.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./views/Profile.jsx";

function App() {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}
      >
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/profile' component={Profile} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
