import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavComponent = () => {
  return (
    <nav>
      <Navbar expand="lg" className="bg-dark py-3 fw-bold">
        <Container>
          <Navbar.Brand>
            <Link className="text-light" to="">
              Paw-Paw
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center ">
              <Nav.Link>
                <Link className="link text-light" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <a className="link text-light" href="#articles">
                  Articles
                </a>
              </Nav.Link>
              <Nav.Link>
                <Link className="link text-light" to="/about">
                  About
                </Link>
              </Nav.Link>

              <NavDropdown
                className="dropdown"
                title="Join us "
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="link fw-bold" to={"/register"}>
                    Register
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="link fw-bold" to={"/login"}>
                    Login
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavComponent;
