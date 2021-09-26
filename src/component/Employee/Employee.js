import React from "react";
import "./Employee.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faDollarSign,
  faMapMarker,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Employee = (props) => {
  //destructure props
  const {
    name,
    appliedrole,
    picture,
    rating,
    feedback,
    address,
    salary,
    skills,
  } = props.person;

  //font-awesome
  const userIcon = <FontAwesomeIcon icon={faUser} size="lg" />;
  const starIcon = <FontAwesomeIcon className="icon-color" icon={faStar} />;
  const mapIcon = <FontAwesomeIcon className="icon-color" icon={faMapMarker} />;
  const arrowicon = <FontAwesomeIcon icon={faArrowUp} />;
  const dollarIcon = (
    <FontAwesomeIcon className="icon-color" icon={faDollarSign} />
  );
  const fbIcon = (
    <FontAwesomeIcon className="icon-color" icon={faFacebook} size="lg" />
  );
  const linkedinIcon = (
    <FontAwesomeIcon className="icon-color" icon={faLinkedinIn} size="lg" />
  );
  const gitIcon = (
    <FontAwesomeIcon className="icon-color" icon={faGithub} size="lg" />
  );
  const gmailIcon = (
    <FontAwesomeIcon className="icon-color" icon={faGooglePlusG} size="lg" />
  );

  console.log("from employee", props.picture);
  return (
    <div className="col-md-4 p-3  ">
      <div className="card-tile card-style card">
        <a href="./bio" className="icon-hover">
          {userIcon}
        </a>
        <div className="text-center ">
          <div className="avatar-container">
            <figure>
              <img
                style={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "200px",
                }}
                src={picture}
                alt=""
              />
            </figure>
            <p>
              <em>{appliedrole}</em>
            </p>

            <h2>{name}</h2>
            <br />

            <div className="text-align text-center">
              <p>
                {dollarIcon} {salary}
              </p>
              <p>
                {starIcon} {rating}/5 ({feedback} reviews)
              </p>

              <p>
                {mapIcon} {address}
              </p>
            </div>
          </div>

          <ul className="skill-group">
            {skills.map((skill) => (
              <li className="me-3 mb-3 bg-white rounded-pill" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="btn-group btn-container">
          <a href="./facebook">{fbIcon}</a>
          <a href="./gmail">{gmailIcon}</a>
          <a href="./linkedin">{linkedinIcon}</a>
          <a href="./github">{gitIcon}</a>
          <button className="btn-style">{arrowicon} Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
