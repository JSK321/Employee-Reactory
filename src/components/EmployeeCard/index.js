import React from "react";
import "./styles.css";

function EmployeeCard(props) {
    return (
            <div className="col-md-4">
                <div className="card employeeCard">
                    <img alt="" src={props.image} className="employeePicture" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Name:</strong> {props.firstName} {props.lastName}</h5>
                        <p className="card-text"><strong>Phone:</strong> {props.phone}</p>
                        <p className="card-text"><strong>Email:</strong> {props.email}</p>
                        <p className="card-text"><strong>Age:</strong> {props.age}</p>
                    </div>
                </div>
            </div>
    )
}

export default EmployeeCard;