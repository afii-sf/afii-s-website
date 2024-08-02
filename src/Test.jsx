import Select from 'react-select'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getDatabase, ref, child, get, query, equalTo, orderByChild} from "firebase/database";
import { initializeApp } from "firebase/app";
import Nav from './Nav';
import "./index.css";
// // import { onSnapshot } from "firebase/firestore";

// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://website-f2e75-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

const langOptions = [
  { value: 'english', label: 'English' },
  { value: 'cantonese', label: 'Cantonese' },
  { value: 'yoruba', label: 'Yoruba' }
];

const priorityOptions = [
  { value: 'housing', label: 'Housing' },
  { value: 'food', label: 'Food' },
  { value: 'health', label: 'Health'}
];
const countryOptions = [
  { value: 'usa', label: 'USA' },
  { value: 'china', label: 'China' },
  { value: 'nigeria', label: 'Nigeria' }
];




const Home = () => {
  //  Database logic

    // const dbRef = ref(getDatabase());
    // get(child(dbRef, "1LRvl2x4W64O8DoCx4Aoaj46iitN0QlmR5mRt4pT4bMI/Organizations/African Advocacy Network/Language")).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });

    // Query logic

    // const dbRef = ref(getDatabase(), "1LRvl2x4W64O8DoCx4Aoaj46iitN0QlmR5mRt4pT4bMI/Organizations");
    // const langQuery = query(dbRef, orderByChild("Fees"), equalTo(""));
    // get(langQuery).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }});
    // console.log(langQuery);

    const [data, setData] = useState({
      nationality: [],
      language: [],
      priority: []
    });

    const handleChange = (selectedOptions, {name}) => {
      setData({
        ...data,
        [name]: selectedOptions ? selectedOptions.map(option => option.value) : [] 
      });
    };
    console.log(data.nationality);


    return (
      <div>
      <Nav />
        <form className="questions">
          <label for="nationality">What nationalities do you identify with?</label>
          <Select
            isMulti
            name="nationality"
            id="national"
            className="input"
            options={countryOptions}
            onChange={handleChange}
          />
          <label for="language">What languages do you speak fluently? (Select as many as you want)</label>
          <Select
            isMulti
            name="language"
            id="language"
            className="input"
            onChange={handleChange}
            options={langOptions} />
          <label for="priority">What are your top priorities?</label>
          <Select
            isMulti
            name="priority"
            id="priority"
            className="input"
            onChange={handleChange}
            options={priorityOptions} />
          <Link to={`/result?nationality=${encodeURIComponent(data.nationality)}`}><button type="submit" className="submit">Submit</button></Link>
        </form>
      </div>
    );
}

// export default Home;
