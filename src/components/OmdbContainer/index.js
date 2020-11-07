import React, { Component } from "react";
import NavBar from "../NavBar";
import EmployeeCard from "../EmployeeCard";
import API from "../../utils/API";


class OmdbContainer extends Component {
    state = {
        result: [],
        search: "",
        searchEmp: [],
        
    }

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees() {
        API.search().then(res =>
            this.setState({ result: res.data.results })
        )
    }

    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //       [name]: value
    //     });
    // };


    // searchEmployees = () => {
    //     let filterSearch = []
    //     this.state.results.forEach(data => {
    //         if(data.name.first.includes(this.state.search)) {
    //             filterSearch.push(data)
    //         }
    //     })
    //     this.setState({searchEmp: filterSearch})
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployees();
    // };

    render() {
      
        return (
            <div>
                <NavBar 
                   
                />
                <div className="row">
                    {this.state.result.map(result => (
                        <EmployeeCard
                            key={result.id.value}
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