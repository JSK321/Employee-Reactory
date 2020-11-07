import React, { Component } from "react";
import NavBar from "./components/NavBar";
import EmployeeCard from "./components/EmployeeCard";
import API from "./utils/API";

class App extends Component {
    state = {
        result: [],
        search:""
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        API.search().then(res =>
            this.setState({ result: res.data.results })
        )
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {

        return (
            <div>
                <NavBar
                   handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}
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

export default App;