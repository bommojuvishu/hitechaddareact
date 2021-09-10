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

function AboveCloud() {
  const classes = useStyles();
  // var result;
  const [result, setResult] = useState(0);

  useEffect(() => {
    var url = "https://hitechadda.com/getmoment";

    axios.get(url).then((res) => {
      const webdata = res.data;
      //   console.log("URLDATA", res.data);
      res.data.cols[1].hidden = true;
      res.data.cols[2].hidden = true;
      res.data.cols[3].hidden = true;
      res.data.cols[4].hidden = true;
      res.data.cols[5].hidden = true;
      // res.data.cols[8].hidden = true;

      res.data.data = _.orderBy(res.data.data, ["AboveCloud"], ["desc"]);

      console.log("RESULT", res.data);

      setResult(res.data);
    });
  }, []);

  return (
    <div className="container">
      Nifty 500 Above Cloud: shows the list of stocks that are above the
      ichimoku cloud for maximum number of days <br />
      Higher the Score , Higher the number of days
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
