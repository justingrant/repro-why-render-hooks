import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const whyDidYouRender = require("@welldone-software/why-did-you-render");
whyDidYouRender(React);

function Repro() {
  const [count] = useState(0);
  const obj = useMemo(() => ({ count }), [count]);
  return <div>count: {obj.count}</div>;
}

const App = () => <Repro />;
ReactDOM.render(<App />, document.getElementById("root"));
