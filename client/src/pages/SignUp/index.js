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
class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  setField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  register = async () => {
    const data = await axios.post(
      "http://localhost:8000/accounts/registration",
      this.state
    );
    console.log(data);

    window.sessionStorage.setItem("userToken", data.data.token);
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
                    <MDBIcon icon="lock" /> Sign Up
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      name="username"
                      onChange={this.setField}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      name="email"
                      onChange={this.setField}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      onChange={this.setField}
                      validate
                      name="password"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={this.register} color="primary">
                      Register
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>
                      Already have an account?<Link to={path.LOGIN}>Login</Link>{" "}
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

export default SignUp;
