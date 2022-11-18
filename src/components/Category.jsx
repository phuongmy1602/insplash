import React from "react";

function Category(props) {
  return (
    <div class="pages">
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default Category;