import React, { useState } from "react";
import { FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import "../App.css";
function AddCompo({ handleAdd }) {
  // const [count,setCount] = useState()
  // const history = useHistory();
  const [input, setInput] = useState({ title: "", desc: "", exp: "" });
  // setInput({...input,id:1+count+Math.ceil(Math.random()*10)})
  // //  setInput({...input,id:c})
  return (
    <div style={{ width: "650px", margin: "auto" }}>
      <h1>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </h1>
      <Form.Label>Title</Form.Label>
      <FormControl
        type="text"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <Form.Label>Description</Form.Label>
      <FormControl
        as="textarea"
        rows={3}
        onChange={(e) => setInput({ ...input, desc: e.target.value })}
      />
      <Form.Label>Experience</Form.Label>
      <FormControl
        type="text"
        onChange={(e) => setInput({ ...input, exp: e.target.value })}
      />
      <br />
      <Link
        to="/"
        onClick={() => {
          input.title.length > 0 &&
          input.desc.length > 0 &&
          input.exp.length > 0
            ? handleAdd(input)
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
        Add
      </Link>
    </div>
  );
}

export default AddCompo;
