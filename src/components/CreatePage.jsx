import React from "react";

function CreatePage(props) {
  return (
    <div className="pages">
      <a href={props.link}>{props.name}</a>
    </div>
  );
}

export default CreatePage;