import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

//Imports: Components
import Databox from "./components/slices/databox/databox";

//Imports: Data
import { dataSample } from "./data/data";

function App() {
  return (
    <>
      <GlobalStyles />
      <Databox data={dataSample} />
    </>
  );
}

export default App;
