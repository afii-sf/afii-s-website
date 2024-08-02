import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./home.css";
const Help = () => { 
    return (
        <>
        <Nav />
        <h1 className="text-center p-3"> Search For Organizations</h1>
        <p className="text-center"> You may be eligible to receive help from more organizations. <br/> Check it out through our database</p>
        {/* <input type="text" placeholder="Search.." className="form-control w-50 m-3"/> */}
        <section className="w-100 d-flex flex-column justify-content-center align-items-center faq mb-4" style={{backgroundColor:"#FFF4E0"}}>
            <div className="container shortcuts">
                <div className="p-4 service">
                    <Link to={`/service?service=legal`} className="text-center p-2">Legal Services</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <img src="./src/images/legal.png"></img>
                        <p className="fs-5 text-center">Seeking for a lawyer's advice or help with documentation?</p>
                    </div>
                </div>
                <div className="p-3 service m-3">
                    <Link to={`/service?service=emergency`} className="text-center p-2">Emergency Assistance</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <img src="./src/images/emergency.png"></img>
                        <p className="fs-5 text-center">Need emergency housing, food resources or medical help?</p>
                    </div>
                </div>
                <div className="p-3 service">
                    <Link to={`/service?service=family`} className="text-center p-2">Family Support</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <img src="./src/images/family.png"></img>
                        <p className="fs-5 text-center">Seeking assistance and support as a family?</p>
                    </div>
                </div>
                <div className="p-3 service m-3">
                    <Link to={`/service?service=employment`} className="text-center pb-3">Employment Training and Education</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <img src="./src/images/employment.png"></img>
                        <p className="fs-5 text-center">Wish to receive quality education and qualification to secure a job</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Help;