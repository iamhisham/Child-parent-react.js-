import React from "react";
import Child from "./child";
function parentF(props) {
  const get = (data) => {
    console.log("got the " + data);
  };
  return (
    <div>
      <Child save={get} />
    </div>
  );
}

export default parentF;
