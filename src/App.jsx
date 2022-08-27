import React from "react";
import "./App.css";
import Filter from "./components/Filter";
import Product from "./components/Product";
function App() {
  // const filterRef = useRef();
  // const [filter, setFilter] = useState("");
  // no need while
  return (
    <div className="App">
      {/* <Product filterItem={filter} /> */}
      {/* <Filter filter={filter} setFilter={setFilter} /> */}
      {/* state is managed and code is clean */}
      <Product />
      <Filter />
    </div>
  );
}

export default App;
