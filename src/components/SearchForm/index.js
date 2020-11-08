import React from 'react';
import "./styles.css";

export default function SearchForm(props) {
    return (
        <div>
            <form className="form-inline d-flex justify-content-center" onSubmit={props.handleFormSubmit}>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    className="form-control"
                    type="search"
                    placeholder="Search Employee"
                    aria-label="Search"
                />
            </form>
        </div >
    )
}
