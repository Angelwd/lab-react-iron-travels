import { useState } from "react";

import travelPlans from "../assets/travel-plans.json";

const TravelList = () => {
  const [locations, setLocations] = useState(travelPlans);

  return (
    <div className="travel-list">
      {locations.map((location) => {
        return (
          <div className="travel-card" key={location.id}>
            <img src={location.image} alt="location" />

            <div>
              <h2>
                {location.destination} ({location.days} Days)
              </h2>
              <em>{location.description}</em>

              <p>
                <span className="strong">Price:</span> {location.totalCost}$
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
