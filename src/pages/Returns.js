import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Input } from "antd";
import { Button } from "antd";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function Returns() {
  // var result;

  let stockname = "";
  let startdate = "",
    enddate = "";

  const [result, setResult] = useState("...");

  useEffect(() => {}, []);

  function onChange(date, dateString) {
    console.log(dateString);
    startdate = dateString[0];
    enddate = dateString[1];
  }

  function onInputChange(e) {
    console.log("onInputChange", e.target.value);
    stockname = e.target.value;
  }

  const submitData = () => {
    console.log("button clicked");
    var url = "https://hitechadda.com/returns";
    let datasent;
    datasent = { stockname: stockname, startdate: startdate, enddate: enddate };

    axios.post(url, datasent).then((res) => {
      console.log("URLDATA testing", res.data);
      setResult(res.data.name + " : " + res.data.returns);
    });
  };

  return (
    <div className="container">
      Enter the stock symbol and click submit
      <div>
        <Input
          placeholder="Enter stock name "
          style={{ width: 200 }}
          onChange={onInputChange}
        />{" "}
        <br />
        <RangePicker onChange={onChange} />
        <br />
        <Button type="primary" onClick={() => submitData()}>
          Submit
        </Button>
        <br />
        <ul class="list-group">
          <li class="list-group-item">{result}</li>
        </ul>
      </div>
    </div>
  );
}

export default Returns;
