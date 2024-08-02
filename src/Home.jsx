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
                    {/* <img src="./src/images/checklist.png" alt="img" className="float-end opacity-100 w-40 d-inline"></img>                */}
                    <img src="https://s3-alpha-sig.figma.com/img/6808/468d/7e849dc6dcf4ba9a7f7e72f77853a7ad?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c7ZMQKLQgISdBzsOSIGFoTVhUJ4Xxz4s1C9kCrYDRe7FShv-9AaKe7SoWj7eZMqF8KkwTezmFD0gg49FNFM4ip3cLUytW4MYHXwlhSumGSqvU3m7SsvDYU7Wnjiu1UJDaTEp9ygVb9bQ~DYiw4xQZmkqJQeOVqWY7GYoSqlnDghBOwf8ir~ZiO6t-tLiPLm6NJjorneHE0H6yZdbBOIbwaqzAXjc6Jae1-NB14WF5hl2ZmcEk2XZQnWKvxXLkIyg~TR~5jhrQ7XDsnx-L2MevCnf6wyAsBctLLT7F0CPBiWhfFjM7umdgdXxuSa094cqsYs9esUnCZNbWMHk0Px7nA__" alt="img" className="float-end opacity-100 w-40 d-inline"></img>               
                 </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-warning">
                <div className="container px-5 py-4">
                    <h2 className="mb-3">How the Quiz works</h2>
                    <div className="row steps">
                        <div className="col-4">
                            {/* <img src="./src/images/question.png"></img> */}
                            <img src="https://s3-alpha-sig.figma.com/img/2728/b6a8/3e8ee75b21cc468e657fbcd97c7e1b20?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1JrQb-lNNjU1zHuOwYFZA5iAQzNc8LA3aFaWLako1~8D-RWYji~tRLG1XcxgYXn-S7wGFrUtYtPbcecfvsHoSwRVfAsDOjt6aUD8L5KfZGGrY7PdRcIAi280YWOhgdeMrSYU05OmPbePuFLaQGnE2cg781Z4jsDu39jL1RITNDYCRBNS~NGfEhRYgXtz~RSKKyB2NOTUWctR-n8kRIF1D1IYv8CPPImL14YT6KtIgcjxzIz86W~wCTSWcca59yANXc5ZUYkhpkbVzTdtNZrvE2mnVTAZ9eg6JBLw10B8Afem-nGAG3LRDsns6PKOaxyZD19A2OOiD5QpIr0-s4T1g__"></img>
                            <h4 className="ms-5">1. Answer the questions</h4>
                            <p className="mt-3">Share your story anonymously by completing a short, simple quiz</p>
                        </div>
                        <div className="col-4">
                            {/* <img src="./src/images/result.png"></img> */}
                            <img src="https://s3-alpha-sig.figma.com/img/4f23/0b60/84977066a711b55a917710d82a9a5c22?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RAPT6TzEIUyXbXViGe2b8HAkS1PT8y5kRZadYcw6hYzKHfq5Kf6jvHBlXiYFX-cOmDf81GVHJ9LIF24VqhvI2sPOh0iYmmRJnVJQGiZ2y2PE6S65ORTmfANqjdlLbGoZpT~lHLcVudxEKFN1QOQZQNwMrJ4QvC5bSCrc-eFHjuAyw9bfYT9814np5IIqTVfiUY8J1GCvZJTPAqULisLafIi3Wma2K8uNQpmv2yyj6~8YpzTLzV5C1bvBhomsAcixjPj3g1ocFskOCgtd7f-73CrVLjJoD3433qT-nj~M5XNavzAywO~gYJ78IuUJQZ~W4ODvMl1kxpNZEFUCSG19UQ__"></img>
                            <h4 className="ms-5">2. Get answers</h4>
                            <p className="mt-3">The platform analyzes your answers to get a personalized list of resources</p>
                        </div>
                        <div className="col-4">
                            {/* <img src="./src/images/assistance.png"></img> */}
                            <img src="https://s3-alpha-sig.figma.com/img/d658/79bf/574e5e04743992087b63bee3a12f96d2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1XewyK6CXY5DGU-rsCASmJxgIn2oo~Johle7woTOR6~49vN8Jk-fPAqOWQba9o~WvKlFEvYH0fuqUhbMrLSaaDwrJ1QKqEtBcWczgaLNkOlQHglgeK7LVhlZu0vh1ZQnRzKccP6~mMAOfUV3Lm9e14w-VG9BCCkWhtCEEK8IZyngQ2TW3ErdZxssvtSmdkMSUleO9nI8FMjimuIdix6DgqtUCaCgw9ZLCDUIcgByRoN3ziYyVe-HE~KEEy66qaaws7EieFh1dsb~oZqbfASg8lJlSPVsej2~xOYiQc~gDtgXdnQAF0jRK5AxZdoT6GnqnxE~9zRqot2vnrRToW3dw__"></img>
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
                            {/* <img src="./src/images/support.png"></img> */}
                            <img src="https://s3-alpha-sig.figma.com/img/2ad8/1927/a75872b1245226e9bab1ce37de2b192d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iKeLgAyp7guKmg8hkG8vF4S0M4AVervQbn5Rxk70neEHL-1wZCA7AEUPVQRwMm-m2Zoi20d52Fgcb2TRkvGoehmE2w~M~ONGhWRd--zrWFZEo1FZqoVQUrA9RUSBP3pq5Bn~qKGesqZcsKBGUx4fseEpCmtkGy92apQQ2hP28bxptrwJyPfjGMZFfuVrPEhUZaBaKAgfnxETzy~Unc1r98yvn7QsMqvnuJfJVyAeom2xy~DWDi8qivZPTzJtVRMRk-7VWXKDtskNPAzkpsG5JPSK9er4rKSWWuMbqZ7lR-mxQfsTda0tGOqPVWTw23vMLplUS8Q0HMQnV1Qr87T-mw__"></img>
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