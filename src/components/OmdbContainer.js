import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchMovies("The Lion King");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Movies API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    this.setState({ search: "" })
  };

  // If not using Ternary Operation, use fucntion to handle true/false
  // renderMovieData = () => {
  //   if (this.state.result.Title) {
  //     return (
  //       <MovieDetail
  //       title={this.state.result.Title}
  //       src={this.state.result.Poster}
  //       director={this.state.result.Director}
  //       genre={this.state.result.Genre}
  //       released={this.state.result.Released}
  //     />
  //     )
  //   } else {
  //     return <h1>No result found</h1>
  //   } 
  // }
  
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {/* use fuction if not using Ternary */}
              {/* {this.renderMovieData()}  */}

              {!this.state.result.Title ? ( // Ternary operation
              <h1>No result found</h1>
              ) : (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
