import React from "react";

import HourlyOutlook from "./HourlyOutlook";

export default function DailyOutlook(props) {
  return (
    
     <div>
       <h4>Hourly Outlook</h4>     
        <div className="ForecastPlanner">
          <div className="row"> 
             {props.data.map(function (hourlyForecast, index) {
                if (index > 4 && index < 9) {
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
