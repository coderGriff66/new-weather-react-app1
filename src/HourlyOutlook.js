import React from "react";
import WxIcons from "./WxIcons";

export default function HourlyOutlook(props) {
  function hours() {
    let time = new Date(props.data.dt * 100);
    return time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true,});

  }
    return (
      
    <div className="HourlyOutlook">
       <div className="card">
          <h5 className="DailyOutlook-time">{hours()}</h5>
            <WxIcons code={props.data.icon} size={35} />
              <div>
              <span className="DailyOutlook-temp"><strong>{props.data.temp}°</strong></span>
              </div>
            </div>
      </div>
    
    );
  } 