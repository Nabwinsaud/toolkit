// import React, { useRef, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice";
// const Filter = ({ filter, setFilter, filterRef }) => {
const Filter = () => {
  const filter = useSelector((state) => state.productFilter.filter);

  //   const [filter, setFilter] = useState("");
  //   const filterRef = useRef();

  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="filter names"
        value={filter}
        // ref={filterRef}
        // onChange={(e) => setFilter(e.target.value)}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
