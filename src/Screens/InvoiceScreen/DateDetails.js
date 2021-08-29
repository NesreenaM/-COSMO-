import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

export default function DateDetails() {
  return (
    <div className="Date-Details">
      <div className="Date-title">Details</div>

      <div className="date-table">
        <div className="first-row">
          <div className="globle-flexRow">
            <p>Issue Date </p>
          </div>
          <div className="globle-flexColumn">
            <p>
              12/31/2020 &nbsp; <CalendarTodayIcon className="calender-icon" />{" "}
            </p>
          </div>
          <div className="globle-flexColumn">
            <p>P.O. #</p>
            <p>555555</p>
          </div>
        </div>
        <div className="second-row">
          <div className="globle-flexColumn">
            <p>Due Date</p>
            <p>12/31/2020</p>
          </div>
          <div className="globle-flexColumn">
            <p>Delevery Date</p>
            <p>12/31/2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
