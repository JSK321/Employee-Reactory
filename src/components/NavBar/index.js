import React from 'react'
import "./styles.css";

export default function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <h1 className="">Employee Directory</h1>
                <div className="row">
                    <div className="col">
                        <label class="form-check-label" for="defaultCheck1" /> Click to sort A to Z,<br/>Unclick to sort Z to A
                    <input
                            class="form-check-input"
                            type="checkbox"
                            onChange={props.handleClickChange} 
                            value={props.isClicked}
                            id="defaultCheck1"
                        />
                    </div>
                    <div className="col">
                        <form className="form-inline" onSubmit={props.handleFormSubmit}>
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
                    </div>
                </div>
            </nav>
        </div>
    )
}