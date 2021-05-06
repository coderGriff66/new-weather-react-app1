import React from "react";

import HourlyOutlook from "./HourlyOutlook";

export default function DailyOutlook(props) {
  return (
    
     <div><h4>Hourly Oulook</h4>     
        <div className="ForecastPlanner">
          <div className="row"> 
             {forecast.hourly.map(function (hourlyForecast, index) {
                if (index > 0 && index < 4) {
             return (
              <div className="col" key={index}> 
            <HourlyOutlook data={hourlyForecast} />
              </div>
            );
        } else {
          return null;
        }
      })}
       </div>     
      </div>
    </div>
  );  
}
