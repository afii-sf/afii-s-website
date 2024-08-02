import { useLocation } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "./index.css";
const Result = ({ result }) => {
    const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW91Ympvcnpzd211ZW5rcXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNTUxNzcsImV4cCI6MjAzNTYzMTE3N30.GJSXRMxFzTD5-5v7ksGPHAphXUX5F2Z0TV5UwajjaI8"
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [dbData, setDbData] = useState(null);
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleExpand = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };
    
    // extract data from URL
    const location = useLocation();
    const queryParams =  new URLSearchParams(location.search);
    const encodedData = queryParams.get('data');

    let queryData = {};

    if (encodedData) {
      try {
        const decodedData = decodeURIComponent(encodedData);
        queryData = JSON.parse(decodedData);
      } catch (e) {
        console.error('Failed to decode data:', e);
      }
    }

    console.log(queryData);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
            .from('organizations')
            .select()
            .contains('language', queryData.language)
            .contains('target_age', [queryData.age])
            .contains('operating_cities', queryData.county)
            .contains('provided_services', queryData.family == "Yes" ? ["Family"] : [])
            .contains('provided_services', queryData.emergency == "Yes" ? ["Emergency Services"] : [])
            .contains('provided_services', queryData.legal == "Yes" ? ["Legal Services"] : [])
            .contains('provided_services', queryData.counseling == "Yes" ? ["Employment Training/Counseling"] : [])
            .contains('provided_services', queryData.tutoring == "Yes" ? ["English Tutoring"] : [])
            .contains('ethnicity', queryData.ethnicity)
            if (error) {
                console.log('error', error)
            } else {
                setDbData(data)
                console.log('data', data)
            }
        }
        fetchData()
    }, []);





    return (
        <>
            <Nav />
            <main>
                <section className="w-100 vh-100 d-flex flex-column align-items-center">
                    <h1 className="mt-5" style={{color:"#C56A4B", textAlign:"center"}}>Congratulations! You have completed the quiz</h1>
                    <h2 className="text-center">Here are resources we think might help you</h2>
                    <h1 className="mt-5" style={{color:"#FFC154"}}>Local Organizations</h1>
                        <div className="justify-content-center container test-row mt-1">
                            {dbData && dbData.map((item, index) => {
                            const isExpanded = expandedIndexes.includes(index);
                            const content = isExpanded ? item.overview : item.overview.substring(0, 100) + '...';
                            return(
                                <div key={index} className="result bg-warning test-row-block">
                                    <div className="d-flex ustify-content-between">
                                        {/* <img src={item.logo} alt={item.name} style={{width:"15%"}} /> */}
                                        <h4>{item.name}</h4>
                                    </div>
                                    <p className="p-1">{content} <span className="text-primary" onClick={() => toggleExpand(index)}> {isExpanded ? "Show Less" : "Read More"} </span></p>
                                    {item.phone_number && 
                                        <div>
                                            <i className="fa-solid fa-phone d-block mt-1">&nbsp;&nbsp;</i>
                                            {item.phone_number[0]}
                                        </div>
                                        }
                                    {item.link && 
                                        <div>
                                            <i class="fa-solid fa-globe d-block mt-1">&nbsp;&nbsp;</i>
                                            <a href={item.link} style={{color:"black"}} target="_blank">Visit Website</a>
                                        </div>
                                    }
                                </div>
                            )})}
                        </div>
                </section>
            </main>
        </>
    );
}

export default Result;

