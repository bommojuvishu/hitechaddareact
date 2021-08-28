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

function AboveCloud() {
  const classes = useStyles();
  // var result;
  const [result, setResult] = useState(0);

  useEffect(() => {
    var url = "https://hitechadda.com/getmoment";

    axios.get(url).then((res) => {
      console.log("URLDATA testing", result);
      const webdata = res.data;
      //   console.log("URLDATA", res.data);
      res.data.cols[1].hidden = true;
      console.log("RESULT", res.data.cols);

      setResult(res.data);
    });
  }, []);

  return (
    <div className="container">
      Nifty 500 Above Cloud: shows the list of stocks that are above the
      ichimoku cloud for maximum number of days <br />
      Higher the Score , Higher the Momentum
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

export default AboveCloud;
