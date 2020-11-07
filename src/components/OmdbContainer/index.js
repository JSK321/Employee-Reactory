import React, { Component } from "react";
import NavBar from "../NavBar";
import EmployeeCard from "../EmployeeCard";
import API from "../../utils/API";


class OmdbContainer extends Component {
    state = {
        result: [],
        filter: "",
        
    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees() {
        API.search().then(res =>
            this.setState({ result: res.data.results })
        )
    }

    employeeFilter = (filter) => {
       let employeeFilter = this.state.filteredResult
       employeeFilter = employeeFilter.filter(results => {
            let filterEmployee = filter.name.first.toLowerCase()
            return filterEmployee.indexOf(filter.toLowerCase()) !== -1
       })
       this.setState({
           employeeFilter
       })
    }

    render() {
      
        return (
            <div>
                <NavBar 
                    employeeFilter={this.employeeFilter}
                />
                <div className="row">
                    {this.state.result.map(result => (
                        <EmployeeCard
                            key={result.id.value}
                            gender={result.gender}
                            firstName={result.name.first}
                            lastName={result.name.last}
                            phone={result.phone}
                            email={result.email}
                            age={result.dob.age}
                            image={result.picture.large}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default OmdbContainer;