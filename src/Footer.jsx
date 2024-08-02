import { Link } from "react-router-dom";
import "./home.css";

const Footer = () => {
    return (
        <footer className="w-100 d-flex flex-column justify-content-center align-items-center bg-warning text-light ">
            <div className="container p-4">
                <div className="row">
                    <div className="col-4">
                        <Link to={"/about"} className="p-3"><h4>About Us</h4></Link>
                        <Link to={"/about"} className="p-3"><h4>How It Works</h4></Link>
                    </div>
                    <div className="col-4 text-center p-3">
                        <Link to={""} ><i class="fa-brands fa-facebook fa-2x p-1"></i></Link>
                        <Link to={""}><i class="fa-brands fa-linkedin fa-2x p-1"></i></Link>
                        <Link to={""}><i class="fa-brands fa-instagram fa-2x p-1"></i></Link><br></br>
                        <a href="mailto:contact.afii.sf@gmail.com" className="fs-5 mt-2">contact.afii.sf@gmail.com</a>
                    </div>
                    <div className="col-4">
                        <Link to={"/help"} className="p-3 text-end"><h4>Find Help</h4></Link>
                        <Link to={"/faqs"} className="p-3 text-end"><h4>FAQs</h4></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;