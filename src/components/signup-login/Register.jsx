import React, { useState } from "react"; // Importing the React library
import * as Components from "./Component"; // Importing components from the Components file

function Register() {
  // Creating a function that returns JSX code (React Component)
  const [signIn, toggle] = useState(true); // Creating a state using useState with an initial value of true and array destructuring
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handles login logic
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevents form from submitting
    console.log("email", email, "password", password);
    try {
      // Handle login logic here
      event.target.reset();
    } catch (error) {
      setError(error.message); // Sets error message if an error occurs
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault(); // prevent default form submission behavior
    console.log("name", name, "email", email, "password", password);
    try {
      // TODO: add logic for registering user with backend API
    } catch (error) {
      // If an error occurs during registration, set the error state variable
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      // If the input has a value, add "has-value" class
      input.classList.add("has-value");
    } else {
      // If the input does not have a value, remove "has-value" class
      input.classList.remove("has-value");
    }
  };
  return (
    // Returning the following JSX content
    <>
      <Components.Body>
        <Components.Container>
          {" "}
          {/* Container component*/}
          <Components.SignUpContainer signinIn={signIn}>
            {" "}
            {/*  SignUpContainer component with dynamic signIn prop*/}
            <Components.Form onSubmit={handleRegister}>
              {" "}
              {/*  Form component*/}
              <Components.Title>Create Account</Components.Title>{" "}
              {/* Title
          component with text as child*/}
              <Components.Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value); // Update state variable for name
                  handleInputChange(e);
                }}
                required
              />{" "}
              {/*Input
          component for name field*/}
              <Components.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value); // Update state variable for email
                  handleInputChange(e);
                }}
                required
              />{" "}
              {/*  Input component for email field*/}
              <Components.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value); // Update state variable for password
                  handleInputChange(e);
                }}
                required
              />{" "}
              {/*  Input component for password field*/}
              <Components.Button type="submit">Sign Up</Components.Button>{" "}
              {/* Button component for sign-up*/}
              {/* Error message */}
              <div>{error}</div>
              <Components.Paragraph>Or Register Using</Components.Paragraph>
              <div className="alt-login">
                <a href="" target="_blank">
                  <i className="fab fa-facebook-f icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-google icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-twitter icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-github icon"></i>
                </a>
              </div>
            </Components.Form>
          </Components.SignUpContainer>
          <Components.SignInContainer signinIn={signIn}>
            {" "}
            {/*  SignInContainer component with dynamic signIn prop*/}
            <Components.Form onSubmit={handleLogin}>
              {" "}
              {/*  Form component*/}
              {/*  Title component
          with text as child*/}
              <Components.Title>Sign in</Components.Title>{" "}
              {/*  Input
          component for email field*/}
              <Components.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value); // Update state variable for email
                  handleInputChange(e);
                }}
                required
              />{" "}
              {/*  Input component for password field*/}
              <Components.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value); // Update state variable for password
                  handleInputChange(e);
                }}
                required
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>{" "}
              {/*  Anchor component with reset password link*/}
              <Components.Button>Sign In</Components.Button>{" "}
              {/*  Button
          component to sign in*/}
              {/* Error message */}
              <div>{error}</div>
              <Components.Paragraph>Or Log In Using</Components.Paragraph>
              <div className="alt-login">
                <a href="" target="_blank">
                  <i className="fab fa-facebook-f icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-google icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-twitter icon"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fab fa-github icon"></i>
                </a>
              </div>
            </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signinIn={signIn}>
            {/*  OverlayContainer component with dynamic signIn prop*/}
            <Components.Overlay signinIn={signIn}>
              {" "}
              {/* Overlay component with dynamic signIn prop*/}
              <Components.LeftOverlayPanel signinIn={signIn}>
                {" "}
                {/*  LeftOverlayPanel component with dynamic signIn prop*/}
                <Components.Title>Welcome Back!</Components.Title>{" "}
                {/*  Title
            component with text as child*/}
                <Components.Paragraph>
                  {/* Paragraph component  */}
                  To keep connected with us please login with your personal info{" "}
                  {/* Text as the child of Paragraph
              component*/}
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  {/*  A button styled as GhostButton, which toggles signIn state
              if clicked*/}{" "}
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signinIn={signIn}>
                {" "}
                {/*  RightOverlayPanel component*/}
                <Components.Title>Hello, Friend!</Components.Title>{" "}
                {/*  Title
            component with text as child*/}
                {/* Paragraph component */}
                <Components.Paragraph>
                  Enter Your personal details and start journey with us{" "}
                  {/*  Text as the child of Paragraph component*/}
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  {/*  A button styled as GhostButton, which toggles signIn state
              if clicked*/}{" "}
                  Register
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </Components.Body>
    </>
  );
}

export default Register; // Exporting the Register component to be used in other files
