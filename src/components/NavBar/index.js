import React, { Component } from "react";
import API from "../../utils/API";
import "./styles.css";

export default class NavBar extends Component {
    state = {
        searchEmp: "",
    }

    handleInputChange = event => {
        this.setState({
            searchEmp: event.target.value
        })
        this.state.onChange(event.target.value)
    }

    handleSearchEmployee = event => {
        event.preventDefault();
        this.state.search(this.state.searchEmp)
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <h1 className="mx-auto">Employee Directory</h1>
                    <form className="form-inline" onSubmit={this.handleSearchEmployee}>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.searchEmp}
                            name="searchEmp"
                            className="form-control"
                            type="search"
                            placeholder="Search Employee"
                            aria-label="Search"
                        />
                    </form>
                    <div>
                        <button className="searchBtn" type="submit">Search</button>
                    </div>
                </nav>
            </div>
        )
    }
}
