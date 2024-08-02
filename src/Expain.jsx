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
                            {/* <img src = "./src/images/quiz.png" alt="img" className="img-fluid float-start"/> */}
                            <img src = "https://s3-alpha-sig.figma.com/img/80c0/acce/611b8d064771687a744b86c27294a60a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDhCsBj8xhVrQE3ApaJDECHwZVip~goaM9hjhx86zKmyR8UBBMlZ78CthC2RudwNoEEPg0O-YmZz1aBa-txRRwrdG-XXXvjOA1h-EU1k9Co2U2C3u-bidCq5EN0u5rWBZ~5QJx14T9T4Vgs7UIp6I2~1RJSrMPvZC0pxezpvrnjEiJZlHfXhr9dDWUPplBsg~qbrioaBd8bYBsDQctGzymv-iX0tQ2ZvtyCvAdZfZNUbuqufZ9RS5KKml8uTFZisDQ7dB88eDPrt7nVOknO6gORKHwkNYYOqWGR50zkwLAI51ZRmLhz6t38IAxJhd0vCS0NhLPvJ~vxbVVWqeDDOTQ__" alt="img" className="img-fluid float-start"/>
                            <h3 className="p-2">Interactive Quiz</h3>
                            <p className="fs-5 mt-4">You answer a series of questions about the help you need, the language you speak, and your origin</p>
                        </div>
                        <div className="col-lg-6 p-1">
                            {/* <img src="./src/images/recommendation.png" alt="quiz" className="img-fluid float-start"/> */}
                            <img src="https://s3-alpha-sig.figma.com/img/a0a4/b76d/4cf347964a55cadb5a63e518c26d2c96?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULjDq72LbKCiJjgVc6BwhtBTSwcSZRdXpYlTo7uG~FYEFrDFfnK~GvNt9xAc~N8~5B-omLf~8siGeuGs5I04C~9jjhYt4M2NjbYW1ywHelC6kxUkONhEFbVozzxB0RWXISYCDjh4AlCLD1N9IXCrBMmM10JyZ~3qqFjJjMsyQQlxT6Onqn8gRvHFlAEq4rY8Qo3bnxT~gi2LQscpUYtV15Jz5cKr2xO48cMZjb007tb1ane87bguVTu2ftyRKT2djF1ctiC7app3c3lTYzezAEKRqw7Di9xb86L8~27iS2jEKR7farndDoA5eZY8WfNMBX3H-LtYxNBRnkwPHXr7Fg__" alt="quiz" className="img-fluid float-start"/>
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
                            {/* <img src = "./src/images/multilingual.png" alt="img" className="img-fluid float-start"/> */}
                            <img src = "https://s3-alpha-sig.figma.com/img/b49b/45e4/a67df172314f043eda4c4da073821f14?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8CW33boZosYJBWoZygtOM5lZJZXcM4130zrbid7P7GtXjnZ2WDp-5KMZjRTXONqKNQo-8qwA636uX9Z0yrluzGrzm4RrtSXsjyGQqtSX2P7jk55hgIC~3Rf5oO1TXKOZ6xO74frvi7Gk8MOcirD6g-CiyTadsqInTzLnMKnGNAm18UBey4Z1cyqxrqc90q5xzEcOn2z4jcyEiA3Sw3K1uXnLoPFZkUSzs6jOAWrUzLw0mphEPwFR5TsNj2-mItBKN7HEawJvPhH-HRuCYg9Ow6NLfIoGAdjiJk75TtVAFJTDaculMql3zigC~Af4VMJwycash1pzK~5WluBfulG4Q__" alt="img" className="img-fluid float-start"/>
                            <h3 className="p-2">Multilingual Access</h3>
                            <p className="fs-5 mt-3">The platform is available in multiple languages, making it accessible to non-English-speaking newcomers</p>
                        </div>
                        <div className="col-lg-6 p-3">
                            {/* <img src="./src/images/ease.png" alt="quiz" className="img-fluid float-start"/> */}
                            <img src="https://s3-alpha-sig.figma.com/img/da78/6c13/efc5fc3d6751496aff7d3ecc7cc868da?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bk6H9UpxKSuYSQ9Kwpji83GxveSownQSGu1VrdC9MW3i-xcyvdapREyzoLDBQ9GQULIdbJBMFa3hVn-k7ln6auQ-FjmlK3H0pszJRBrd0Ayx3pQND0gFFkGaNDYv2esH169jPWSpMzMjvdX2BP9fvspUEyBAqw-qOoohvtkzF42YavJa1kjgHHVy6jbYWU1eFv2Tzs8VEqbqAuJn1OkA~N3ZRYyJFsV6Tr3vIcv9X4pvRboz1AfadjXZVXXp4GxfBMkiG0qT2oed5eNynAPky3y3CA1YIWEyPe69ehMB9wDxju718ffc1rfSxkZK48IO4Yv0kICNe4crSXpdOS1WmA__" alt="quiz" className="img-fluid float-start"/>
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