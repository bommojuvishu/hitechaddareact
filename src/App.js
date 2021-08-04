import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Cloud from "./pages/Cloud";
import Stocknotify from "./pages/Stocknotify";

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
            Hitech Adda
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
                <Link to="/">Home</Link>{" "}
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#">
                {/* Features */}
              </a>
              <a className="nav-link" href="#">
                {/* Pricing */}
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
          <Route exact path="/">
            <Stocknotify />
          </Route>
          <Route exact path="/stocklist">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" gutterBottom>
                Akshara
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
