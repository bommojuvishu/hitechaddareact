import React, { useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import GalleryCustom from "../components/GalleryCustom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function GalleryStocks() {
  const classes = useStyles();

  const [result, setResult] = useState(0);
  const [stocknames, setStock] = useState();
  const [Isloading, setLoad] = useState(true);

  useEffect(() => {
    var url = "https://hitechadda.com/getmoment";

    axios.get(url).then((res) => {
      var webdata = res.data.data;

      var rsi40 = webdata.filter(function (el) {
        return el.RSI < 35;
      });

      var stocknames2 = _.map(rsi40, "name");

      setStock(stocknames2);
      setLoad(false);
      setResult(res.data);
    });
  }, []);

  return (
    <div className="container">
      {Isloading
        ? "still loading"
        : stocknames.map((val) => {
            val = "https://hitechadda.com/images/" + val + ".png";
            return (
              <img src={val} class="img-responsive" alt="Cinque Terre"></img>
            );
          })}
    </div>
  );
}

export default GalleryStocks;
