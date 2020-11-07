import React, { Component } from "react";
import NavBar from "../NavBar";
import EmployeeCard from "../EmployeeCard";
import API from "../../utils/API";


class OmdbContainer extends Component {
    state = {
        result: [],
        search: "",

    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees() {
        API.search().then(res =>
            this.setState({ result: res.data.results })
        )
    }

    // filterEmployees() {
    //     const filterResult = this.state.result.filter(result => )
    //     this.setState()
    // }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.result.map(result => (
                    <EmployeeCard
                    firstName={result.name.first}
                    lastName={result.name.last}
                    phone={result.phone}
                    email={result.email}
                    age={result.dob.age}
                    image={result.picture.large}
                    />
                ))}
            </div>
        )
    }
}

export default OmdbContainer;