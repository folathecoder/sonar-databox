import React from "react";
import { GlobalStyles, Main } from "./styles/GlobalStyles";

//Imports: Section
import DataboxSlider from "./components/sections/databoxSlider/databoxSlider";

//Imports: Data


function App() {
  return (
    <Main>
      <GlobalStyles />
      <DataboxSlider />
    </Main>
  );
}

export default App;
