import React, { useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import axios from "axios";
import _ from "lodash";

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

function PercentileRSI() {
  const classes = useStyles();
  // var result;
  const [result, setResult] = useState(0);

  useEffect(() => {
    var url = "https://hitechadda.com/getmoment";

    axios.get(url).then((res) => {
      console.log("URLDATA testing", result);
      const webdata = res.data;
      res.data.cols[1].hidden = true;
      res.data.cols[2].hidden = true;
      res.data.cols[3].hidden = true;
      res.data.cols[4].hidden = true;
      res.data.cols[5].hidden = true;
      res.data.cols[7].hidden = true;

      res.data.data = _.sortBy(res.data.data, [
        function (o) {
          return o.PecentileRSI;
        },
      ]);
      console.log("RESULT", res.data);

      setResult(res.data);
    });
  }, []);

  return (
    <div className="container">
      Percentile RSI: shows the stocks RSI if it is highest or lowest for past 6
      months.
      <br />
      Higher the Score , Higher the RSI for the past 6 months
      <br />
      Lower the Score , Lower the RSI for the past 6 months
      <br />
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

export default PercentileRSI;
