import React from "react"; // Importing the React library
import * as Components from "./Component"; // Importing components from the Components file

function Register() {
  // Creating a function that returns JSX code (React Component)
  const [signIn, toggle] = React.useState(true); // Creating a state using useState with an initial value of true and array destructuring

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
            <Components.Form>
              {" "}
              {/*  Form component*/}
              <Components.Title>Create Account</Components.Title>{" "}
              {/* Title
          component with text as child*/}
              <Components.Input type="text" placeholder="Name" />{" "}
              {/*Input
          component for name field*/}
              <Components.Input type="email" placeholder="Email" />{" "}
              {/*  Input component for email field*/}
              <Components.Input type="password" placeholder="Password" />{" "}
              {/*  Input component for password field*/}
              <Components.Button>Sign Up</Components.Button>{" "}
              {/* Button component for sign-up*/}

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
            <Components.Form>
              {" "}
              {/*  Form component*/}
              {/*  Title component
          with text as child*/}
              <Components.Title>Sign in</Components.Title>{" "}
              {/*  Input
          component for email field*/}
              <Components.Input type="email" placeholder="Email" />{" "}
              {/*  Input component for password field*/}
              <Components.Input type="password" placeholder="Password" />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>{" "}
              {/*  Anchor component with reset password link*/}
              <Components.Button>Sign In</Components.Button>{" "}
              {/*  Button
          component to sign in*/}
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
