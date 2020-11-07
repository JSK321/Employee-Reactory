import React from "react";
import "./styles.css";

function Header() {
    return (
        <div>
            <nav className="navbar">
                <h1 className="mx-auto">Employee Directory</h1>
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search Employee" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
        </div>

    );
}

export default Header;