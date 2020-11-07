import React from "react";
import "./styles.css";

function EmployeeCard(props) {
    return (
        <div className="container">
            <div className="employeeCard">
                <ul className="list-group list-group-horizontal">
                    <img alt="" src={props.image} />
                    <li className="list-group-item">Name: {props.firstName} {props.lastName}</li>
                    <li className="list-group-item">Phone: {props.phone}</li>
                    <li className="list-group-item">Email: {props.email}</li>
                    <li className="list-group-item">Age: {props.age}</li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;