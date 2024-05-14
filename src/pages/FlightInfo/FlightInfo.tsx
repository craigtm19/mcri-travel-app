import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const FlightInfoPage = () => {
const [allFlighInfoPage, setallFlightInfoPage] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/FlightInfoPage', {
      method: "GET"
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log("data", data)
      return setallFlightInfoPage(data)
    },)
  }, [])
  
  console.log("allFlightInfoPage", allFlighInfoPage)

  if(allFlighInfoPage.length > 0){
    return (
      <>
        <Header />
  
        <div className="page-content">
          <h1>🛫FlightInfoPage🛬</h1>
  <div>
    <p> {allFlighInfoPage[0].DepartureAirport}</p>
  </div>
          <p>Welcome to group 3 flight info page</p>
          <button>Buttonnn</button>
        </div>
      </>
    )
  }

}
export default FlightInfoPage;
