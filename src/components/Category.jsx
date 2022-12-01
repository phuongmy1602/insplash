import React from "react";

function Category(props) {
  return (
    <div className="pages">
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default Category;