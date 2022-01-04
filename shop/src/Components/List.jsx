import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
export const List = ({ item, handleDelete }) => {
  return (
    <div
      style={{
        border: "1px solid black ",
        padding: "5px 10px",
        width: "90%",
        margin: "20px auto",
        // margin: "20px 20px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginLeft: "10px" }}>
        <h1>{`Shop Name--->${item.name}`}</h1>

        <p>{`Start Date ${item.start}--->End Date ${item.end}`}</p>
        <p>{`Shop Category--->${item.category}`}</p>
        <h2>{`Shop Location---> ${item.area}`}</h2>
        <Row>
          <Col></Col>
          <Col xs={2}>
            <Link
              className="btn btn-success"
              style={{ borderRadius: "0", padding: "5px 30px" }}
              to={`/edit/${item.id}`}
            >
              Edit
            </Link>
          </Col>
          <Col xs={2}>
            <Button
              className="btn btn-danger"
              style={{ borderRadius: "0" }}
              onClick={() => handleDelete(item)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
