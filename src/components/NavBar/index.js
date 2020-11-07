import React from 'react'
import "./styles.css";

export default function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <h1 className="mx-auto">Employee Directory</h1>
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
            </nav>
        </div>
    )
}


// import React, { Component } from 'react'

// export default class NavBar extends Component {
//     state = {
//         search: ""
//     }

//     searchEmp = event => {
//         let keyword = event.target.value;
//         this.setState({search: keyword})
//     }

//     render() {
//         return (
//             <div>
//             <nav className="navbar">
//                 <h1 className="mx-auto">Employee Directory</h1>
//                 <form className="form-inline">
//                     <input
//                         onChange={this.searchEmp}
//                         name="search"
//                         className="form-control"
//                         type="search"
//                         placeholder="Search Employee"
//                         aria-label="Search"
//                     />
//                 </form>
//             </nav>
//         </div>
//         )
//     }
// }