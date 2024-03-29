import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Cloud from "./pages/Cloud";
import Stocknotify from "./pages/Stocknotify";
import Returns from "./pages/Returns";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";
import AboveCloud from "./pages/AboveCloud";
import PercentileRSI from "./pages/PercentileRSI";
import GalleryStocks from "./pages/GalleryStocks";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <Link to="/">Hitech Adda</Link>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                <Link to="/">Momentum Strategy</Link>{" "}
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#">
                <Link to="/abovecloud">Above Cloud</Link>{" "}
              </a>
              <a className="nav-link" href="#">
                <Link to="/percentilersi">Percentile RSI</Link>{" "}
              </a>
              <a className="nav-link" href="#">
                <Link to="/gallery">Stocks Thumbnail</Link>{" "}
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                {/* Disabled */}
              </a>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/stocklist">
            <Stocknotify />
          </Route>
          <Route exact path="/abovecloud">
            <AboveCloud />
          </Route>
          <Route exact path="/percentilersi">
            <PercentileRSI />
          </Route>
          <Route exact path="/gallery">
            <GalleryStocks />
          </Route>
          <Route exact path="/returns">
            <Returns />
          </Route>
          <Route exact path="/">
            <Container>
              <h3>
                The Website offers different strategies . the data updates for
                every day at 5 PM IST on NIFTY500 stocks list{" "}
              </h3>
              <ul class="list-group">
                <li class="list-group-item">
                  <Link to="/stocklist">
                    Momentum Strategy : the stocks that has consistent Momentum{" "}
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link to="/abovecloud">
                    Above Cloud : list of stocks that are above the ichimoku
                    cloud for maximum number of days
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link to="/percentilersi">
                    Percentile RSI : stocks RSI if it is highest or lowest for
                    past 6 months.
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link to="/gallery">
                    Stocks Gallery : List of Stocks One year graph whose RSI is
                    low
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link to="/returns">
                    Stocks returns : check the returns for stocks in the time
                    range
                  </Link>
                </li>
              </ul>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
