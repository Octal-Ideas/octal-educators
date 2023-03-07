/*
This code imports necessary components from mdb-react-ui-kit and React library.
It defines a function called "LogIn" that returns a JSX block containing a login form.
*/

import React from "react";
import {
  MDBBtn, // Importing the Button component from mdb-react-ui-kit.
  MDBContainer, // Importing the Container component from mdb-react-ui-kit.
  MDBCard, // Importing the Card component from mdb-react-ui-kit.
  MDBCardBody, // Importing the CardBody component from mdb-react-ui-kit.
  MDBInput, // Importing the Input component from mdb-react-ui-kit.
  MDBCheckbox, // Importing the Checkbox component from mdb-react-ui-kit.
  MDBIcon, // Importing the Icon component from mdb-react-ui-kit.
} from "mdb-react-ui-kit";

function LogIn() {
  return (
    <MDBContainer fluid>
      {" "}
      {/*A container that covers the entire viewport width.*/}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "300px",
        }}
      ></div>{" "}
      {/*A div block with a background image.*/}
      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 95%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        {" "}
        {/*A card with some styling.*/}
        <MDBCardBody className="p-5 text-center">
          {" "}
          {/*A card body with some styling.*/}
          <h2 className="fw-bold mb-5">Log In now</h2> {/*A heading.*/}
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
          />{" "}
          {/*A input field with a label.*/}
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
          />{" "}
          {/*A password field with a label.*/}
          <div className="d-flex justify-content-between mx-4 mb-4">
            {" "}
            {/*A div block with some styling.*/}
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />{" "}
            {/*A checkbox with a label.*/}
            <a href="!#">Forgot password?</a> {/*A hyperlink.*/}
          </div>
          <MDBBtn
            className="w-100 mb-4"
            size="md"
            style={{ background: "#009dff" }}
          >
            Log In
          </MDBBtn>{" "}
          {/*A button with some styling.*/}
          <p className="text-center">
            Not a member? <a href="/register">Register</a>
          </p>{" "}
          {/*A paragraph block with some styling and a hyperlink.*/}
          <div className="text-center">
            {" "}
            {/*A div block with some styling.*/}
            <p>or LogIn with:</p> {/*A paragraph block.*/}
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#009dff" }}
            >
              {" "}
              {/*A button with some styling.*/}
              <MDBIcon fab icon="facebook-f" size="sm" /> {/*An icon.*/}
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#009dff" }}
            >
              {" "}
              {/*A button with some styling.*/}
              <MDBIcon fab icon="twitter" size="sm" /> {/*An icon.*/}
            </MDBBtn>

            
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#009dff" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#009dff" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LogIn;
