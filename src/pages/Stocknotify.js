import React, { useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import axios from "axios";

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

function Stocknotify() {
  const classes = useStyles();
  // var result;
  const [result, setResult] = useState(0);

  useEffect(() => {
    var url = "https://hitechadda.com/getmoment";

    axios.get(url).then((res) => {
      console.log("URLDATA testing", result);
      const webdata = res.data;
      console.log("URLDATA", res.data);

      setResult(res.data);
      console.log("RESULT", result);
    });
  }, []);

  return (
    <div className="container">
      Nifty 500 Momentum: shows the stocks that has consistent Momentum <br />
      Higher the Score , Higher the Momentum
      <br />
      strategy lists one month ,three months,six months , one year returns
      {result == 0 ? (
        <h1>No Data</h1>
      ) : (
        <MaterialTable
          title="Basic Search Preview"
          columns={result.cols}
          data={result.data}
          options={{
            search: true,
            sorting: true,
          }}
        />
      )}
    </div>
  );
}

export default Stocknotify;
