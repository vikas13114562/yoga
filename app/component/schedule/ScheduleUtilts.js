
import './schedule.css'
export default function ScheduleUtilts(props) {
    return (
        <div className="schedule-main">
        {props.isHeading ? (
          <div className="schedule-heading">
            {`AISHWARYA'S WEEKLY TEACHING SCHEDULE`}
          </div>
        ) : (
          <>
            <div className="contain">
              <div className="time-category">
                <div className="time">{props.time}</div>
                <div className="category">{props.category}</div>
              </div>

              <div className="member">Become a Member!</div>
            </div>
            <div className="day">{props.day}</div>
          </>
        )}
      </div>
    )
}