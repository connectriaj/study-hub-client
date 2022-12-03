import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import "./SignUp.css";
import { AuthContext } from "../../components/contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, googleLogin, githubProvider, updateUserProfile } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirm = form.password.value;

    createUser(email, password, confirm)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => console.error(error));
    form.reset();
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const githubLogin = new GithubAuthProvider();
  const handleGithubProvider = () => {
    githubProvider(githubLogin)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="mt-5 reg-form mx-auto border shadow-lg p-5 rounded">
        <h3 className="text-center fw-bold mb-4">Please Sign Up</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="Photo url"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm"
              placeholder="Password"
              required
            />
          </Form.Group>

          <div className="my-4">
            <small>Already have an account?</small>
            <Link to="/login">
              <small className="text-right"> Please Login</small>
            </Link>
          </div>
          <Button className="w-100" variant="primary" type="submit">
            Sign Up
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
          <p className="text-center my-3">
            <small>Or Login Using</small>
          </p>
          <div className="d-flex justify-content-center">
            <Link
              to=""
              className="fs-2 text-dark mx-2"
              onClick={handleGithubProvider}
            >
              <FaGithub></FaGithub>
            </Link>
            <Link to="" className="fs-2 text-primary mx-2">
              <FaTwitter></FaTwitter>
            </Link>
            <Link
              onClick={handleGoogleLogin}
              to=""
              className="fs-2 text-danger mx-2"
            >
              <FaGoogle></FaGoogle>
            </Link>
          </div>
        </Form>
        <div className="text-center">
          <p className="mt-5 mb-3">Or Login Using</p>
          <p>
            <Link className="text-dark" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
