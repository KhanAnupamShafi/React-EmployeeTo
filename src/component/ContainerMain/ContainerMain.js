import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Recruit from "../Recruits/Recruit";
import "./ContainerMain.css";

const ContainerMain = () => {
  //store api data
  const [data, setData] = useState([]);
  //store hired staff data
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //Handle hire button click event
  const handleClickEvent = (person) => {
    person.isAdded = "false";
    const newPerson = [...staffs, person];
    //update staff
    setStaffs(newPerson);
  };

  console.log(staffs);
  return (
    <div>
      <div className="hero-container">
        <h2 className="hero-title">
          <span>
            Get <em>expert’s Services</em>
          </span>{" "}
          for any job, Online{" "}
        </h2>
        <h3>
          <small>See the best pros for your job / project</small>{" "}
        </h3>
        <p>Work with the world’s best talent on Employee.To </p>
        <h3>
          Total clients reviews of Virtual Assistants : <strong>5,460</strong>{" "}
          with average rating of <strong>4.7</strong> out of <strong>5</strong>.
        </h3>
      </div>
      <div className="row mx-3">
        <div className="col-md-9 container-employee">
          <div className="row ">
            {data.map((person) => (
              <Employee
                key={person.index}
                person={person}
                handleClickEvent={handleClickEvent}
              ></Employee>
            ))}
          </div>
        </div>
        <div className="col-md-3 container-cart">
          <Recruit hired={staffs}></Recruit>
        </div>
      </div>
    </div>
  );
};

export default ContainerMain;
