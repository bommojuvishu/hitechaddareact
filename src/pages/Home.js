import React from 'react';
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Home() {
    const classes = useStyles();
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