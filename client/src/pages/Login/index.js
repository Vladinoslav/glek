import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Link } from "react-router-dom";
import * as path from "../../constants/routes";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  setField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signIn = async () => {
    const data = await axios.post(
      "http://localhost:8000/accounts/login",
      this.state
    );
    localStorage.setItem("userToken", data.data.token);
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your username"
                      icon="envelope"
                      group
                      type="text"
                      validate
                      name="username"
                      error="wrong"
                      success="right"
                      value={this.state.email}
                      onChange={e => this.setField(e)}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.password}
                      onChange={e => this.setField(e)}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="light-blue"
                      className="mb-3"
                      onClick={this.signIn}
                    >
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>
                      Not a member?<Link to={path.SIGNUP}>Sign Up</Link>{" "}
                    </p>
                    <p>
                      <Link to={path.FORGOTPASSWORD}>Forgot Password?</Link>
                    </p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
