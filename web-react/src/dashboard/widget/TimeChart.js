//@flow

import React, { Component } from "react";
import Chart from "./chart";

const API_URL =
  "https://api.openaq.org/v1/measurements?country=IN&city=Bengaluru&parameter=co";

export default class TimeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch Time Series Data");
        }
      })
      .then(response => {
        this.setState({
          results: response.results.filter(item => {
            return item.location === "BTM Layout, Bengaluru - CPCB";
          })
        });
      });
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <Chart data={results} />
      </div>
    );
  }
}
