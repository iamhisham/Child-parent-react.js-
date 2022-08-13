import React, { useState } from "react";

function Child(props) {
  const [Name, Setname] = useState("");
  const submitted = (e) => {
    e.preventDefault();
    props.save(Name);
  };

  return (
    <div>
      <form onSubmit={submitted}>
        <input
          type="text"
          value={Name}
          onChange={(e) => {
            Setname(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Child;
