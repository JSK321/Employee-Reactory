import React from 'react'
import "./styles.css";


export default function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <h1 className="mx-auto">Employee Directory</h1>
                <form className="form-inline">
                    <input
                        // onChange={props.handleInputChange}
                        // value={props.value}
                        name="searchEmp"
                        className="form-control"
                        type="search"
                        placeholder="Search Employee"
                        aria-label="Search"
                    />
                <button className="searchBtn">
                    Search
                </button>
                </form>
            </nav>
        </div>
    )
}
