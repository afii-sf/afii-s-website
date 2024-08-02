import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
    return (
        <nav class="navbar bg-body-warning navbar-expand-lg">
          <div class="container">
            {/* logo  */}
            <Link class="navbar-brand fs-4" to={"/"}>AFII</Link>
            {/* toggle button */}
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* sidebar  */}
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              {/* sidebar header  */}
              <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">AFII</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              {/* sidebar body  */}
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                  <li class="nav-item mx-2">
                    <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <Link class="nav-link" to={"/about"}>ABOUT US</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <Link class="nav-link" to={"/help"}>FIND HELP</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <Link class="nav-link" to={"/explain"}>HOW IT WORKS</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <Link class="nav-link" to={"/faq"}>FAQs</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <Link class="nav-link" to={"/quizinfo"}>Quiz</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
};

export default Nav;