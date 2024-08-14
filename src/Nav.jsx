import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            {/* logo  */}
            <Link class="navbar-brand fs-6" to={"/"} style={{color:"#C56A4B"}}><img src="https://s3-alpha-sig.figma.com/img/e76d/7a48/2f82f69a077e4d874a9a3ee021263566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~lgdB3ejQvpTLB3d3-7DT4BooQEpcEr8VvM13hGxwXM2ISeb5X77uv8c-KBSgfMQXpRqSYXB1uMwmTVos4igrORmJ7U6eQD3DIXnRsuuvOVb5wcXHHzyrkxzgLh5MlmCJlbUhaHpj11rLm3H7xcY2MTEbHaxYvQDqOBeksy~fR0vh3n0MV9~B50mGI4JhhfXqQyheYAitdPhugOlC9JMTsLVfJSsoKeFzOthS35iCzTYgPPBppYNvHqUY0w4rZzA-HkqqRk42Kv3zRMiQt-nNpBCAcSqzf0GL7nRZJDjfWJjzFxhF3nuYsYVaM3L70ug5k-4E9yA9r9Y57XkzHQGQ__" alt="AFII" width="30" height="24"></img>afii.us</Link>
            {/* toggle button */}
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* sidebar  */}
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              {/* sidebar header  */}
              <div class="offcanvas-header border-bottom">
                <img src="https://s3-alpha-sig.figma.com/img/e76d/7a48/2f82f69a077e4d874a9a3ee021263566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~lgdB3ejQvpTLB3d3-7DT4BooQEpcEr8VvM13hGxwXM2ISeb5X77uv8c-KBSgfMQXpRqSYXB1uMwmTVos4igrORmJ7U6eQD3DIXnRsuuvOVb5wcXHHzyrkxzgLh5MlmCJlbUhaHpj11rLm3H7xcY2MTEbHaxYvQDqOBeksy~fR0vh3n0MV9~B50mGI4JhhfXqQyheYAitdPhugOlC9JMTsLVfJSsoKeFzOthS35iCzTYgPPBppYNvHqUY0w4rZzA-HkqqRk42Kv3zRMiQt-nNpBCAcSqzf0GL7nRZJDjfWJjzFxhF3nuYsYVaM3L70ug5k-4E9yA9r9Y57XkzHQGQ__" alt="AFII" width="30" height="24" class="offcanvas-title" id="offcanvasNavbarLabel"></img>
                <span>afii.us</span>
                {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">AFII</h5> */}
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              {/* sidebar body  */}
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                  <li class="nav-item mx-2">
                    <Link class="nav-link active" aria-current="page" to={"/"} target="">HOME</Link>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="https://afii-eight.vercel.app/about" target="_top">ABOUT US</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="https://afii-eight.vercel.app/help" target="_top">FIND HELP</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="https://afii-eight.vercel.app/explain" target="_top">HOW IT WORKS</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="https://afii-eight.vercel.app/faq" target="_top">FAQs</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="https://afii-eight.vercel.app/quizinfo" target="_top">QUIZ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
};

export default Nav;