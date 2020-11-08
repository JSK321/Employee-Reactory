import React, { Component } from "react";
import NavBar from "./components/NavBar";
import EmployeeCard from "./components/EmployeeCard";
import SearchForm from "./components/SearchForm";
import SortForm from "./components/SortForm";
import API from "./utils/API";

class App extends Component {
  state = {
    result: [],
    search: "",
    isClicked: false,
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }

  handleClickChange = event => {
    if (event.target.checked === true) {
      this.setState({ isClicked: true })
      this.state.result
        .sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          } else {
            return 0
          }
        })
    }
    else if (event.target.checked === false) {
      this.setState({ isClicked: false })
      this.state.result
        .sort((a, b) => {
          if (a.name.first > b.name.first) {
            return -1;
          }
          if (a.name.first < b.name.first) {
            return 1;
          } else {
            return 0
          }
        })
    }
  }
  render() {

    return (
      <div>
        <NavBar />
        <SearchForm
          handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}
        />
        <SortForm
          handleClickChange={this.handleClickChange}
        />
        <div className="row">
          {this.state.result

            .filter(result => {
              return result.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
            })

            .map(result => (
              <EmployeeCard
                key={result.id.value}
                firstName={result.name.first}
                lastName={result.name.last}
                phone={result.phone}
                email={result.email}
                age={result.dob.age}
                image={result.picture.large}
                gender={result.gender}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default App;