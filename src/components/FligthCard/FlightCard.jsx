import React from "react";

import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkCard from "@skyscanner/backpack-web/bpk-component-card";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";

import STYLES from "./FlightCard.scss";
import arrow from "./right-arrow.svg";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const FlightCard = (props) => {
  if (props.data != null) {
    return (
      <BpkCard className={getClassName("card")}>
        <div className={getClassName("card__content")}>
          {props.data.legs.map((leg) => {
            const departure_time = new Date(leg.departure_time);
            const arrival_time = new Date(leg.departure_time);
            return (
              <React.Fragment key={leg.id}>
                <div className={getClassName("card__item-left")}>
                  <img
                    className={getClassName("card__image")}
                    src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}
                  />
                  <BpkText className={getClassName("card__time")}>
                    {departure_time.getHours() +
                      ":" +
                      departure_time.getMinutes()}
                    <br />
                    <BpkText className={getClassName("card__port")}>
                      {leg.departure_airport}
                    </BpkText>
                  </BpkText>
                  <img className={getClassName("card__image")} src={arrow} />
                  <BpkText className={getClassName("card__time")}>
                    {arrival_time.getHours() + ":" + arrival_time.getMinutes()}
                    <br />
                    <BpkText className={getClassName("card__port")}>
                      {leg.arrival_airport}
                    </BpkText>
                  </BpkText>
                </div>
                <div className={getClassName("card__item-right")}>
                  <BpkText className={getClassName("card__duration")}>
                    {Math.round(leg.duration_mins / 60) +
                      "h " +
                      (leg.duration_mins % 60)}
                  </BpkText>
                  <BpkText className={getClassName("card__stop")}>
                    {leg.stops == 0 ? (
                      <span className={getClassName("card__green")}>
                        Direct
                      </span>
                    ) : (
                      <span className={getClassName("card__red")}>
                        {leg.stops} stop
                      </span>
                    )}
                  </BpkText>
                </div>
              </React.Fragment>
            );
          })}

          <div className={getClassName("card__footer")}>
            <BpkText className={getClassName("card__price")} tagName="p">
              {props.data.price}
            </BpkText>
            <BpkText className={getClassName("card__agent")} tagName="p">
              {props.data.agent}
            </BpkText>
          </div>
          <BpkButton large>Select</BpkButton>
        </div>
      </BpkCard>
    );
  } else {
    return <span></span>;
  }
};

export default FlightCard;
