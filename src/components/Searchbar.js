import React from "react";
import "./Searchbar.css";

const Searchbar = props => {
  return (
    <React.Fragment>
      <input
        type="search"
        className="search"
        placeholder="Pika, pika..chuuuu"
        onChange={props.onChange}
        value={props.value}
      />
    </React.Fragment>
  );
};

export default Searchbar;
