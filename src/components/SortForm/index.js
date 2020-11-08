import React from 'react';
import "./styles.css";

export default function SortForm(props) {
    return (
        <div className="form-check d-flex justify-content-center">
            <div>
                <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={props.handleClickChange}
                    value={props.isClicked}
                    id="defaultCheck1"
                />
            </div>
            <p className="sortText">Click to sort A to Z,<br />Unclick to sort Z to A</p>
        </div>
    )
}
