import React, { Component } from "react";
import axios from "axios";

export class Cloud extends Component {
  static propTypes = {};

  state = {
    stocks: [],
    prices: [],
    stocksdown: [],
    pricesdown: [],
  };

  componentDidMount() {
    this.getstockdata();
    setInterval(async () => {
      this.getstockdata();
    }, 30000);
  }

  myChangeHandler = (event) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === "" || re.test(event.target.value)) {
      // this.setState({ value: event.target.value });
      console.log(event.target.value);
      this.setState({ username: event.target.value });
    } else {
      console.log(event.target.value.slice(0, -1));
      var result = event.target.value.slice(0, -1);
      alert("INVALID VALUE");
      this.setState({ username: result });
    }
  };

  getstockdata() {
    axios.get(`https://hitechadda.com/getcloudabove`).then((res) => {
      const webdata = res.data;
      let stocks = webdata.stocks.split(",");
      let prices = webdata.trigger_prices.split(",");
      this.setState({
        stocks: [],
        prices: [],
      });
      this.setState({ stocks: [...stocks, this.state.stocks] });
      this.setState({ prices: [...prices, this.state.prices] });
    });

    axios.get(`https://hitechadda.com/getclouddown`).then((res) => {
      const webdata = res.data;
      let stocks = webdata.stocks.split(",");
      let prices = webdata.trigger_prices.split(",");
      this.setState({
        stocksdown: [],
        pricesdown: [],
      });
      this.setState({ stocksdown: [...stocks, this.state.stocksdown] });
      this.setState({ pricesdown: [...prices, this.state.pricesdown] });
    });

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=2f6b6dd1e09f46e713c41dc68e27faea`
      )
      .then((res) => {
        const webdata = res.data;
        console.log(webdata.coord.lat);
        this.setState({ long: webdata.coord.lon });
        this.setState({ lat1: webdata.coord.lat });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Nifty 50 Ichimoku Cloud</h1>
          <p className="lead"></p>
          the stocks that are above/below the Ichimoku Cloud
          <hr className="my-4" />
          the page refreshs for every 5 mins
          <p></p>
        </div>
        <div className="row">
          <div className="col">
            {this.state.stocks.length < this.state.stocksdown.length ? (
              <h1 style={{ color: "red", textAlign: "center" }}>Trend DOWN</h1>
            ) : (
              <h1 style={{ color: "green", textAlign: "center" }}>Trend UP</h1>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 style={{ color: "green" }}>
              Above Cloud : {this.state.stocks.length - 1}
            </h3>
            <ul className="list-group">
              {this.state.stocks.map((stock) => (
                <li className="list-group-item">{stock}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3 style={{ color: "red" }}>
              Below Cloud : {this.state.stocksdown.length - 1}
            </h3>
            <ul className="list-group">
              {this.state.stocksdown.map((stockdown) => (
                <li className="list-group-item">{stockdown}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cloud;
