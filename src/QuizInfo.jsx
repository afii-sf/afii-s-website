import Nav from "./Nav";
import { Link } from "react-router-dom";
import "./index.css";


const QuizInfo = () => {
    return (
        <div>
            <Nav />
            <main>
                <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center p-5">
                    <div className="container info">
                        <div className="rule d-flex align-items-center">
                            <img src="./src/images/anonymous.png" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>This quiz is completely anonymous</h5>
                                <p>We do not collect any of your personal information, so you can be rest assured that your identity will remain
                                    anonymous while completing the quiz.
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            <img src="./src/images/skip.png" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>You may skip any question</h5>
                                <p>We understand that there may be times when you are not willing or unable to answer some questions. In such cases, you have the option to skip them. However, please note that the more answers you provide, the more personalized results you are going to receive
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            <img src="./src/images/return.png" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>You can return back to the previous question</h5>
                                <p>It is not important in what order you answer the questions, so you may decide to skip a question and then return to it later.
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            <img src="./src/images/delete.png" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>The results of the quiz are not stored</h5>
                                <p>After completing the quiz, your results will not be stored. You will have to retake the quiz if you close the page and want to see the results later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/quiz" className="btn btn-lg btn-warning">Next</Link>
                </section>
            </main>
        </div>
    );
}

export default QuizInfo;