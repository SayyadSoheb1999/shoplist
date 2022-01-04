import React, { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { FormControl, FormLabel, FormGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const Add = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    area: "",
    start: "",
    end: "",
    category: "",
  });
  const handleClick = () => {
    if (
      data.name !== "" &&
      data.area !== "" &&
      data.start !== "" &&
      data.end !== "" &&
      data.category !== ""
    ) {
      dispatch({
        type: "ADD",
        data: data,
      });
      console.log("use useDispatch :", data);
    }
  };

  return (
    <div style={{ margin: " 50px " }}>
      <h1>
        <ArrowLeft
          onClick={() => history.push("/")}
          style={{
            marginLeft: "100px",
            padding: "5px",
            backgroundColor: "tomato",
            borderRadius: "100px",
            color: "black",
          }}
        />
      </h1>
      <div style={{ width: "500px", margin: "auto" }}>
        <FormGroup>
          <FormLabel htmlFor="name">
            <b>Shop Name</b>
          </FormLabel>
          <FormControl
            type="text"
            id="name"
            name="name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="area">
            <b>Shop Location</b>
          </FormLabel>
          <FormControl
            type="text"
            id="area"
            name="area"
            onChange={(e) => setData({ ...data, area: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="start">
            <b>Start Date</b>
          </FormLabel>
          <FormControl
            type="date"
            id="start"
            name="start"
            onChange={(e) => setData({ ...data, start: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="end">
            <b>End Date</b>
          </FormLabel>
          <FormControl
            type="date"
            id="end"
            name="end"
            onChange={(e) => setData({ ...data, end: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="category">
            <b>Shop Category</b>
          </FormLabel>
          <FormControl
            type="text"
            id="category"
            name="category"
            onChange={(e) => setData({ ...data, category: e.target.value })}
          />
        </FormGroup>
        <span>
          <Button
            style={{ margin: "10px" }}
            onClick={() => {
              handleClick();
              history.push("/");
            }}
          >
            Add New
          </Button>

          {/* <Button onClick={() =>}>See List</Button> */}
        </span>
      </div>
    </div>
  );
};
