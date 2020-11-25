import React, { Component } from "react";
import axios from "axios";

export class Cloud extends Component {
  static propTypes = {};

  state = {
    stocks: [],
    prices: [],
  };

  componentDidMount() {
    this.getstockdata();
    setInterval(async () => {
      this.getstockdata();
    }, 30000);
  }

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
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Nifty 50 Inchimoku Cloud</h1>
          <p className="lead"></p>
          the stocks that are above the Inchimoku Cloud
          <hr className="my-4" />
          the page refreshs for every 5 mins
          <p></p>
        </div>

        <div className="row">
          <div className="col">
            <h3>Stock Name</h3>
            <ul className="list-group">
              {this.state.stocks.map((stock) => (
                <li className="list-group-item">{stock}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3>Price</h3>
            <ul className="list-group">
              {this.state.prices.map((price) => (
                <li className="list-group-item">{price}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cloud;
