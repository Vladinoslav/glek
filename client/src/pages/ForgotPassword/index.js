import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
const ForgotPassword = () => {
  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol  md="6">
          <MDBCard >
            <MDBCardBody >
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Forgot your password?
                </h3>   
              </MDBCardHeader>
              <form>
            
            <div className="grey-text">
             
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
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
              
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Reset password</MDBBtn>
            </div>
          </form>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ForgotPassword;