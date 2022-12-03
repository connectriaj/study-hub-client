import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Login.css";
import { AuthContext } from "../../components/contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, googleLogin, githubProvider } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    form.reset();
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const githubLogin = new GithubAuthProvider();
  const handleGithubProvider = () => {
    githubProvider(githubLogin)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="mt-5 login-form mx-auto border p-5 shadow-lg rounded">
      <h3 className="text-center fw-bold mb-4">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
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
        <div className="my-4">
          <Link to="/signup">
            <small className="text-right">Forgot password?</small>
          </Link>
        </div>
        <Button className="w-100" variant="primary" type="submit">
          Login
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
        <p className="mt-5 mb-3">Or Sign Up Using</p>
        <p>
          <Link className="text-dark" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
