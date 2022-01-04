import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export const Filter = ({ handleChange }) => {
  const [area, setArea] = useState("");
  const [cate, setCate] = useState("");
  useEffect(() => {
    handleChange(area, cate);
    console.log("in function :", area, cate);
  }, [area, cate]);
  const arr = [
    // "Area/Location",
    "Thane",
    "Mumbai suburban",
    "Pune",
    "Nashik",
    "Ahmednagar",
    "Solapur",
  ];
  const arr2 = ["Stationery Shop", "Baker", "Hotel", "Butcher"];

  return (
    <div style={{ margin: "20px 100px", display: "flex" }}>
      <Form.Select
        style={{ width: "200px", padding: "0 10px" }}
        size="lg"
        onChange={(e) => setArea(e.target.value)}
      >
        {arr.map((item) => (
          <option> {item}</option>
        ))}
      </Form.Select>
      <Form.Select
        style={{ width: "200px", padding: "0 10px" }}
        size="lg"
        onChange={(e) => setCate(e.target.value)}
      >
        {arr2.map((item) => (
          <option> {item}</option>
        ))}
      </Form.Select>
    </div>
  );
};
