import React from "react";
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

function Home() {
  const classes = useStyles();

  useEffect(async () => {
    console.log("URLDATA testing");
    var url =
      "http://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=2f6b6dd1e09f46e713c41dc68e27faea";

    axios.get(url).then((res) => {
      const webdata = res.data;
      console.log("URLDATA", webdata);
    });
  });

  return (
    <div className="container">
      <MaterialTable
        columns={[
          { title: "name", field: "name" },
          { title: "surname", field: "surname" },
          { title: "birthYear", field: "birthYear", type: "numeric" },
          {
            title: "birthCity",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
        ]}
        title="Ichimoku Cloud"
      />
    </div>
  );
}

export default Home;
