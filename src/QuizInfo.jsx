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
                            <img src="https://s3-alpha-sig.figma.com/img/f69a/2abc/0c5ff64e495873e63a6f0797e7fc50bf?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=miOmpw0dPOsnbOHwpCG1aDqmSJjYmO3Lifv6456V55AH9RNwQmWjE-ncUaKdu~ZIOG09p0FfxjU~rTpJW08NUMw0Ga7KOnMejnGGv8c1WoD7rPiYrBIeMw7io33bxy0i-u~jkpnAZeQ3tOyS7bCiFiPhBYlJtPnVT0bC56Xq34BOSUrr8VemwSTFDl-JDd--arsI2PUjBUmVadwR7~nlh~aWzqXaZ-oVdgUs5ew0SV-LLYe3~BW3Sy0i7b8WhnTCtTWzCM7TIWtbFbxBumyJmEWiqoNLdE4xXlJNhZz82-VEgghPhzpPwGWJUr7rN9HcrwoxQXsZgKbifA7aQ1PKSQ__" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>This quiz is completely anonymous</h5>
                                <p>We do not collect any of your personal information, so you can be rest assured that your identity will remain
                                    anonymous while completing the quiz.
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            {/* <img src="./src/images/skip.png" alt="img" className="d-block"/> */}
                            <img src="https://s3-alpha-sig.figma.com/img/6e19/48db/d0c77b2bfbae4f760594dc0714d606ab?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQSd7o7oMeVxTTUGUxWxAtVFi2oaRl7nYzoiUI8rxBkry7ZpFokiwYZMvyfFwjUN0tITz7AeF~7IWHGwBq2ekx~Ct8Z6BCa5WM1~Rem96mwwdq-9K0tTVZm1aXVfkekXxX4zhqRciobFnjGUXLAA5THKPRGXEnWGMfgnzn8oDXjXNbYsvaPrlbINTC3tCWzbh25leXymkpMkmYId5GCmeAFxowdeA~zQ0lJp~ktK0tS~kNOWQnxdl17u65qoOfKKQHOZhG-a7n6A6nmIoW54IWSM7NfLbecpmXbZm2uxeLxyEmWQlsuVQ8RqmuB7IAKzANrBYkx5OgQSCaJlkLghzA__" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>You may skip any question</h5>
                                <p>We understand that there may be times when you are not willing or unable to answer some questions. In such cases, you have the option to skip them. However, please note that the more answers you provide, the more personalized results you are going to receive
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            {/* <img src="./src/images/return.png" alt="img" className="d-block"/> */}
                            <img src="https://s3-alpha-sig.figma.com/img/4713/96f4/dc89692a62d75db733ae93e8b85af034?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=guRGp1NzKzBdVxW~jlJ-8xYW0KHWXcB10oNM2Kao1kgiDzGlV5V8XTLOmlq0fJb-4LKeonAF64P2K1SCcKim-v7MUNqxGSBSKwwK9U4H-aE4MfMRs8qcnhtByRiOYUK9B83jGDCSiMkleLYORdhoKLyUIVQHYOS4StBhtb7LSOsCTcp4EKqJIrtOFIVqd1Yh9XrzNlotMvqzBRU40yOIj8SWYBysunKhqKX1qPvvIzy6BKaGzhWZYviUXt~YZq65Qf0WdNr9Ea1KroynDPbXUmB2FsU8Ud5ixZ41zqDF5erD7m8VGHbmQdfuN2fsrJ4yI~wvtoEpGykIDR~pfLFFDw__" alt="img" className="d-block"/>
                            <div className="rule-instruction mx-3">
                                <h5>You can return back to the previous question</h5>
                                <p>It is not important in what order you answer the questions, so you may decide to skip a question and then return to it later.
                                </p>
                            </div>
                        </div>
                        <div className="rule d-flex align-items-center">
                            {/* <img src="./src/images/delete.png" alt="img" className="d-block"/> */}
                            <img src="https://s3-alpha-sig.figma.com/img/46a3/13bd/2f83ddb4d0447b0ab8c996afdcce9e2e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ID47c59i3u86GmAeGlnL0BJW8fYeRhBvAedYNv9umiOKH6avE0LcQ1UIgKoiO5jbXeNUyloy4VzoSI-Qd80yx0yN6ThogrYZemQraNcOcpIe0J3KdqvoKMjEHPmhnhLrrNPZKOkzlIOdWYk5IGbhb-BrOfWetndNvUz7y-AFM0MF7~2Kink1eTrZDpfMgwxoTFmgatX43~8aHPbGdisLcqmGaWrbqVGybAkHxr1CvmrziRf0qBuJ8p4cEfkN6Z7c5DBR0GB5twBEiOQ-hCesLh3eA2qJSvmQEYMlFtlm6EtAitPR0SlEJ6HoShnOK5wbk-PdRCo0pRrG71oCRbppNA__" alt="img" className="d-block"/>
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