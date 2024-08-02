import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <>
            <Nav/>
            <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="container intro">
                    <div className="w-50 d-inline-block intro-text fs-5">
                        <h1 className="">Get your immigration support in one quiz</h1>
                        <p>Our platform creates a personalized list of immigrant resources that are suitable specifically for YOUR case, based on just a couple of quiz answers!</p>
                        <p>Let's find out how AFII can help you!</p>
                        <Link to="/quiz" className="btn btn-lg btn-warning fs-4">Start Now</Link>
                    </div>
                    <img src="./src/images/checklist.png" alt="img" className="float-end opacity-100 w-40 d-inline"></img>               
                 </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-warning">
                <div className="container px-5 py-4">
                    <h2 className="mb-3">How the Quiz works</h2>
                    <div className="row steps">
                        <div className="col-4">
                            <img src="./src/images/question.png"></img>
                            <h4 className="ms-5">1. Answer the questions</h4>
                            <p className="mt-3">Share your story anonymously by completing a short, simple quiz</p>
                        </div>
                        <div className="col-4">
                            <img src="./src/images/result.png"></img>
                            <h4 className="ms-5">2. Get answers</h4>
                            <p className="mt-3">The platform analyzes your answers to get a personalized list of resources</p>
                        </div>
                        <div className="col-4">
                            <img src="./src/images/assistance.png"></img>
                            <h4 className="ms-5">3. Get Assistance</h4>
                            <p className="mt-3">Contact the recommended entities using the information provided</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-primary-emphasis description">
                <div className="container">
                    <p className="fs-4 text-center"><strong>The Association for Immigrant Integration (AFII)</strong> is a non-profit organization dedicated to helping immigrants in the Bay Area integrate smoothly into their new communities. Here, we believe in compassion, equity, and inclusion. Therefore, we provide an online platform that simplifies the support search for immigrants, ensuring equal access to essential resources for all</p>
                </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center support">
                <div className="container p-4">
                    <h2 className="mb-3 text-center">Support AFII Today!</h2>
                    <div className="row">
                        <div className="col-6">
                            <img src="./src/images/support.png"></img>
                        </div>
                        <div className="col-6 d-flex flex-column">
                            <p className="mb-3">Help us sustain the platform and share the resources to ensure the newcomers settle smoothly into the new communities.</p>
                            <a href="https://www.gofundme.com" className="btn btn-lg m-auto d-block align-items-end justify-content-center fs-4">Donate</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default Home;