import React from "react";
import WxIcons from "./WxIcons";

import "./HourlyOutlook.css";


export default function HourlyOutlook(props) {
  function hours() {
    let time = new Date(props.data.dt * 1000);
    return time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true,});

  }
    return (

    <div className="OutlookPanels">
      
          <h5 className="HourlyOutlook-time">{hours()}</h5>
            <WxIcons code={props.data.weather[0].icon} size={35} />
              <div>
              <span className="HourlyOutlook-temp"><strong>{Math.round(props.data.temp)}°</strong></span>
              </div>
            
      </div>
    
    );
  } 