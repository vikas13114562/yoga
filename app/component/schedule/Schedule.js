import { allData } from "./data";
import ScheduleUtilts from "./ScheduleUtilts";
import './schedule.css'
export default function Schedule() {
  const natureStyle = {
    // backgroundImage: `url('nature.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    
    
  };
  return (
    <div id='schedule' style={natureStyle}>
      {allData.map((data, index) => {
        return (
          <ScheduleUtilts
            key={index}
            isHeading={data.isHeading}
            time={data.time}
            category={data.category}
            day={data.day}
          />
        );
      })}
      <div className="schedule-main">
      <div className="contain">
              <div className="time-category">
                <div className="time">Off</div>
                
              </div>

            </div>
            <div className="day">Sunday</div>
      </div>
    </div>
  );
}
