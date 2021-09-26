import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Recruit from "../Recruits/Recruit";
import "./ContainerMain.css";

const ContainerMain = () => {
  const [data, setData] = useState([]);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleClickEvent = (person) => {
    person.isAdded = "false";
    const newPerson = [...staffs, person];

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
          <small>See the best pros for your job</small>{" "}
        </h3>
        <p>Work with the world’s best talent on Employee.To </p>
        <h3>
          Clients rate Virtual Assistants in Bangladesh 4.7 / 5 on average from
          5,460 reviews
        </h3>
      </div>
      <div className="row ms-3">
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
