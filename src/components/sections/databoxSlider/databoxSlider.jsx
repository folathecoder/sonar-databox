import React from "react";
import { DataboxContainer } from "./databoxSliderStyles";

//Imports: Components
import Databox from "../../databox/databox/databox";
import Supply from "../../databox/children/supply/supply";

//Imports: Data
import {
  supplyData,
  liquidityData,
  holdersData,
  volumeData,
} from "../../../data/testData";

const DataboxSlider = () => {
  return (
    <DataboxContainer>
      <Databox data={supplyData}>
        <Supply />
      </Databox>
      <Databox data={liquidityData}>q</Databox>
      <Databox data={holdersData}></Databox>
      <Databox data={volumeData}></Databox>
    </DataboxContainer>
  );
};

export default DataboxSlider;
