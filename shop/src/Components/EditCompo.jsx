import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
export const EditCompo = () => {
  const [data, setData] = useState([]);

  const selector = useSelector((state) => state.ProductReducer.products);
  useEffect(() => {
    setData(selector);
  }, [selector]);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("useParams : ", id);
  const [input, setInput] = useState({
    id: "",
    name: "",
    area: "",
    start: "",
    end: "",
    category: "",
  });
  const handleEdit = (e) => {
    data[id] = { ...input, id: id };
    dispatch({
      type: "EDIT",
      data: [...data],
    });
  };
  return (
    <div style={{ width: "1200px", margin: "auto" }}>
      <div style={{ width: "650px", margin: "auto" }}>
        <h1>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h1>
        <Form.Label htmlFor="name">
          <b>Shop Name</b>
        </Form.Label>
        <FormControl
          type="text"
          id="name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <Form.Label htmlFor="location">
          <b>Shop Location</b>
        </Form.Label>
        <FormControl
          type="text"
          id="location"
          rows={3}
          onChange={(e) => setInput({ ...input, area: e.target.value })}
        />
        <Form.Label htmlFor="start">
          <b>Start Date</b>
        </Form.Label>
        <FormControl
          type="date"
          id="start"
          onChange={(e) => setInput({ ...input, start: e.target.value })}
        />
        <Form.Label htmlFor="end">
          <b>End Date</b>
        </Form.Label>
        <FormControl
          type="date"
          id="end"
          onChange={(e) => setInput({ ...input, end: e.target.value })}
        />
        <Form.Label htmlFor="category">
          <b>Category</b>
        </Form.Label>
        <FormControl
          type="text"
          id="category"
          onChange={(e) => setInput({ ...input, category: e.target.value })}
        />
        <br />
        <Link
          to="/"
          onClick={() => {
            input.name.length > 0 &&
            input.area.length > 0 &&
            input.start.length > 0 &&
            input.end.length > 0 &&
            input.category.length > 0
              ? handleEdit(input)
              : console.log("required");
          }}
          className="btn btn-success"
          style={{
            padding: "5px 30px",
            borderRadius: "0",
            float: "right",
            marginRight: "60px",
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};
