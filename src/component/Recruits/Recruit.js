import React from "react";
import "./Recruit.css";

const Recruit = (props) => {
  //find total cost
  const totalPrice = props.hired.reduce((total, current) => {
    return total + current.salary;
  }, 0);

  return (
    <div>
      <div>
        <h1>Staff Info</h1>
        <h4>Total hires: {props.hired.length}</h4>
        <h4>Total monthly costs: ${totalPrice.toFixed(2)}</h4>
      </div>

      <div className="staff-container">
        <ul className="staff-list">
          {props.hired.map((staff) => (
            <div key={staff.index} className="row staff-bar p-2 bd-highlight">
              <div className="col-md-2">
                <img
                  className="text-center img-fluid rounded"
                  src={staff.picture}
                  alt=""
                />
              </div>
              <li className="col-md-6 m-2">
                <h5 className="text-bold">
                  {staff.name}{" "}
                  <span>
                    <br />
                    <small>
                      <em className="fw-lighter">{staff.appliedrole}</em>
                    </small>
                  </span>
                </h5>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recruit;
