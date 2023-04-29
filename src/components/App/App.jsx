import React from "react";

import jsonData from "../../flights.json";

import FlightCard from "../FligthCard";
import Header from "../Header";

import STYLES from "./App.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const App = () => {
  return (
    <div className={getClassName("App")}>
      <Header />
      <main className={getClassName("App__main")}>
        {jsonData.itineraries.map((flight) => {
          const legs = jsonData.legs.filter((leg) =>
            flight.legs.includes(leg.id)
          );
          var data = flight;
          flight.legs = legs;
          return (
            <FlightCard
              className={getClassName("App__card")}
              data={data}
              key={flight.id}
            ></FlightCard>
          );
        })}
      </main>
    </div>
  );
};

export default App;
