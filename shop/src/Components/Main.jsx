import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Filter } from "./Filter";
import { List } from "./List";
export const Main = () => {
  const [data, setData] = useState([]);
  const selector = useSelector((state) => state.ProductReducer.products);
  useEffect(() => {
    setData(selector);
  }, [selector]);
  const handleDelete = (e) => {
    const res = data.filter((item) => item !== e);
    setData(res);
  };

  const handleChange = (area, cate) => {
    const a = data.filter((item) => item !== area);
    const res = data.filter((item) => {
      return item.area === area;
    });
    const b = data.filter((item) => item !== cate);
    const d = Array.from(new Set([...res, ...b, ...a]));
    setData(d);
  };

  return (
    <div>
      <Link
        class="btn btn-primary"
        style={{
          float: "right",
          marginRight: "150px",
          marginTop: "0px",
          padding: "10px 50px",
        }}
        to="/add"
      >
        ADD NEW
      </Link>
      <div>
        <Filter handleChange={handleChange} />
      </div>
      {data &&
        data.map((item) => {
          return <List item={item} handleDelete={handleDelete} />;
        })}
    </div>
  );
};
