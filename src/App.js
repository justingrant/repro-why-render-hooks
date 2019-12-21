import React, { useState, useMemo } from "react";
import "./App.css";

const whyDidYouRender = require("@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js");
whyDidYouRender(React, {
  include: [/App/]
});

function App() {
  return <Repro />;
}

function Repro() {
  const [count] = useState(0);
  const obj = useMemo(() => ({ count }), [count]);
  return <div className="App">count: {obj.count}</div>;
}
export default App;
