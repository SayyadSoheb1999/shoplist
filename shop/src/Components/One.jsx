import { Link } from "react-router-dom";
import Two from "./Two";

export const One = ({ data, handleDelete }) => {
  return (
    <div style={{ width: "1200px", margin: "auto" }}>
      <Link
        style={{
          position: "relative",
          left: "900px",
          top: "10px",
          padding: "10px 40px",
          borderRadius: "0",
        }}
        className="btn btn-primary"
        to="/add"
      >
        Add New{" "}
      </Link>
      {data.map((item) => {
        return <List item={item} handleDelete={handleDelete} />;
      })}
    </div>
  );
};
