import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { AuthContext } from "../contexts/AuthProvider";
import { FaUser } from "react-icons/fa";
import ToogleTheme from "../../shared/ToogleTheme/ToogleTheme";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Navbar
      className="py-3"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Link to="/" className="text-decoration-none text-white">
          <Navbar.Brand>
            Study <span className="text-danger">Hub</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="text-white text-decoration-none mx-2"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="text-white text-decoration-none mx-2" to="/blog">
              Blog
            </Link>
            <Link className="text-white text-decoration-none mx-2" to="/faq">
              FAQ
            </Link>
            <Link className="text-white text-decoration-none mx-2" to="/about">
              About Us
            </Link>
          </Nav>

          {/* others part  */}
          <Nav>
            {user?.uid ? (
              <Link
                onClick={logOut}
                className="text-white text-decoration-none mx-2"
                to="/"
              >
                Logout
              </Link>
            ) : (
              <Link
                className="text-white text-decoration-none mx-2"
                to="/login"
              >
                Login
              </Link>
            )}
            <Link className="text-white text-decoration-none mx-2" to="/signup">
              Sign Up
            </Link>

            <Link
              className="text-white text-decoration-none mx-2"
              to="/signup"
            ></Link>

            {/*  <Link to="/" className="text-danger text-decoration-none mx-2">
              {user?.displayName}
            </Link> */}

            <Link to="/" className="text-danger text-decoration-none mx-2">
              {user?.photoURL ? (
                <Image
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  roundedCircle
                  style={{ height: "30px" }}
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
              {isHovering && (
                <small className="ps-3">Hello, {user.displayName}</small>
              )}
            </Link>
            <ToogleTheme></ToogleTheme>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
