import React from "react";
import { CloseButton } from "react-bootstrap";
import "./Recruit.css";

const Recruit = (props) => {
  //find total cost
  const totalPrice = props.hired.reduce((total, current) => {
    return total + current.salary;
  }, 0);

  return (
    <div className="container p-0 bg-container sticky-top">
      <div className="text-white">
        <h1>Staff Info</h1>
        <h4>Total hired: {props.hired.length}</h4>
        <h4>Total monthly cost: ${totalPrice.toFixed(2)}</h4>
      </div>

      <div className="my-4 staff-container">
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
              <CloseButton className="ms-5" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recruit;
