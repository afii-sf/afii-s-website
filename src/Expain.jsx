import Nav from "./Nav";
import Footer from "./Footer";
import "./home.css";
const Explain = () => {
    return (
        <>
            <Nav/> 
            <h1 className="text-center p-5">How the Platform Works</h1>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center explain">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-6 p-3">
                            <img src = "./src/images/quiz.png" alt="img" className="img-fluid float-start"/>
                            <h3 className="p-2">Interactive Quiz</h3>
                            <p className="fs-5 mt-4">You answer a series of questions about the help you need, the language you speak, and your origin</p>
                        </div>
                        <div className="col-lg-6 p-1">
                            <img src="./src/images/recommendation.png" alt="quiz" className="img-fluid float-start"/>
                            <h3 className="p-2">Personalized Recommedations</h3>
                            <p className="fs-5 mt-3">The platform generates a tailored list of local, federal organizations and relevant programs that meet users’ needs</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* space */}
            <section className="w-100 d-flex flex-column justify-content-center align-items-center explain2">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-6 p-3">
                            <img src = "./src/images/multilingual.png" alt="img" className="img-fluid float-start"/>
                            <h3 className="p-2">Multilingual Access</h3>
                            <p className="fs-5 mt-3">The platform is available in multiple languages, making it accessible to non-English-speaking newcomers</p>
                        </div>
                        <div className="col-lg-6 p-3">
                            <img src="./src/images/ease.png" alt="quiz" className="img-fluid float-start"/>
                            <h3 className="p-2">Ease of Use</h3>
                            <p className="fs-5 mt-3">The platform enables immigrants to easily navigate the questions and get personalized results without confusion</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};
export default Explain;