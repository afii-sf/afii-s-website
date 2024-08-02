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
                        {/* <img src="./src/images/legal.png"></img> */}
                        <img src="https://s3-alpha-sig.figma.com/img/81c1/cda9/a6d516e07b267c3bec1b0087e6c5fb72?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BU9QeUPqtSGoC8H81RTHlfpKW1e6jwbpZaH0hPqAK0q8hBhfojmAU9VHhlZHFR79IsT8EQqdHvV19fd1HHxOFDtE8GVGplhb2Ptd~iZ77aCxRzUHmVzbvgCq~zjZjz67i2O4-TcAjX5yUSKlqYv2M4UhlTR8h4Krc4oj-WAWL0etde~uhOqXuNT-nvSLMreqpbcRBXym6R7jXIVT79im1Y~fkKWEa5H0bpWeTr6XgZrxA2U81BuxWE3EHDGTbsCAX14LAyYcFHMWl5biKzsFOy76oiVBTL6ARohwqkG~Gmh6gE9GCAjsD6Y9FOv0YlsiBKRyK6qjZP5FvzGk6WoKeQ__"></img>
                        <p className="fs-5 text-center">Seeking for a lawyer's advice or help with documentation?</p>
                    </div>
                </div>
                <div className="p-3 service m-3">
                    <Link to={`/service?service=emergency`} className="text-center p-2">Emergency Assistance</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {/* <img src="./src/images/emergency.png"></img> */}
                        <img src="https://s3-alpha-sig.figma.com/img/962c/3f1f/3c1dc3924ed025f07ee73b8a3a1cbc64?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffcPkt4IUdiFldRU4iD6e6AvljN-OSURRzO6Tu5d8C3olPi1TU4AgQ1BnjKeTEeLFRvXjEoXITEjiU4jK~QvW~ua2u98GrBHe0rlqObHER9MPSqrrTykuvpRCSAGzipOzkMaVgQGyvfTiUOgoLsOSn2PjWAajRiv6VyTXdAuz5aWlgIpUlD-cUXLzhESo~fm8ZwYUgsRZ9FTgA8ZKQezedNi2I4J3ummkHrjN2GT9EhzeoKCda~AlgDRCsAKcS5OPK94uU6TQYxdacKa9Xcg-71HveXLS1NZkLKWknORJhYWROSxCvxJDqYrPxkGGaMG48sQBSfQ1INJxNfP-eb4KA__"></img>
                        <p className="fs-5 text-center">Need emergency housing, food resources or medical help?</p>
                    </div>
                </div>
                <div className="p-3 service">
                    <Link to={`/service?service=family`} className="text-center p-2">Family Support</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {/* <img src="./src/images/family.png"></img> */}
                        <img src="https://s3-alpha-sig.figma.com/img/9620/e038/2650e3cc7285796e8b435a9343155e60?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hahAV-CXhVvAchZsrYRZt3kHjFsuiFd2LKketoGhmkvFb4JyOtrfwucRSeMSUi4nkvPg5B3MyRzYYCva23BDgCcZns9qyUYMopYLg1sN5uT5y~pw-I0YZ4rZfZigUHddruoFFfxpKX3IYju34iHnZ4dARupnXGarjPbhtRfKL3jEHhR6JYytCrVctO0YcVL8OBIHVb~4YwL8lLeBrKNwCr~6-Ib1-fEzqD4Gh7T2s6llLSF0~ha9UGwf3VeAwMeE0ID2jH0n1t8mbZkiJDsXSQhk3atpet2yDNhkdEeabRJppmxQSnypAhFLJN5WfzmUCBoyC3SanApTL-89yztu6w__"></img>
                        <p className="fs-5 text-center">Seeking assistance and support as a family?</p>
                    </div>
                </div>
                <div className="p-3 service m-3">
                    <Link to={`/service?service=employment`} className="text-center pb-3">Employment Training and Education</Link>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {/* <img src="./src/images/employment.png"></img> */}
                        <img src="https://s3-alpha-sig.figma.com/img/bae5/eb8b/1dbe6480092575bb0eaf85d004ac3127?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0CD7j-gD0UW0Hovp0T3y9uUPSTPAcEx6kPgZv0F6Ta9h118cqOk1ztm81UbvRcl7l6~0MWiJMtq6ihkgVo1Ux1dvZ4pERd6BFeMI7F~dbeK5hRohfi0hcx8tolPulUzKsJhqZleushHw5y2s2uKhpZdGVsTpja7Biz0CNZkWRgEMyZW6RX3KXwjgYNt4VunMsTL6SBGRIUSYZy2OiqJdmdmrmz4v3bALFE6d~hENyBfd8-cJkpa8mUdeY7Pm5oWiZmoQC1QiH2iA~prPcyu5Vnuzq8gpyXJnevxz2KWeOS0wFx38y4HNXeDBO6mYlZkRGBR1kUQ3ghXgnhsEMgoXQ__"></img>
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