import React from "react";
import TestRenderer from "react-test-renderer";

import FlightCard from "./FlightCard";

describe("FlightCard", () => {
  it("should render correctly when there is no item", () => {
    const tree = TestRenderer.create(<FlightCard />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render correctly when there is an item", () => {
    const data = {
      id: "it_1",
      legs: [
        {
          id: "leg_1",
          departure_airport: "BUD",
          arrival_airport: "LTN",
          departure_time: "2020-10-31T15:35",
          arrival_time: "2020-10-31T17:00",
          stops: 0,
          airline_name: "Wizz Air",
          airline_id: "WZ",
          duration_mins: 145,
        },
        {
          id: "leg_4",
          departure_airport: "LTN",
          arrival_airport: "BUD",
          departure_time: "2020-11-11T19:45",
          arrival_time: "2020-11-11T21:10",
          stops: 0,
          airline_name: "Wizz Air",
          airline_id: "WZ",
          duration_mins: 145,
        },
      ],
      price: "£35",
      agent: "Wizzair.com",
      agent_rating: 9.1,
    };
    const tree = TestRenderer.create(<FlightCard data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
