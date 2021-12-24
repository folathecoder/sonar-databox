import React, { useState } from "react";
import {
  DataWrap,
  DataInnerWrap,
  DataDisplay,
  DataTitle,
  DataInfo,
  DataHidden,
  DataOpen,
} from "../databox/databoxStyles";

const Databox = ({ data, children }) => {

  //TODO: ==> State Management

  //* DataBox Toggle: Monitor the toggle feature of the databox
  //* (false === closed state), while (true === opened state)
  const [boxToggle, setBoxToggle] = useState(false);

  //TODO: ==> Event Management

  //* Function that toggles the state of DataBox after a click event is trigger
  const handleBoxToggle = () => {
    setBoxToggle(!boxToggle);
  };

  return (
    <DataWrap onClick={handleBoxToggle}>
      <DataInnerWrap>
        <DataDisplay>
          <DataTitle>{data.dataTitle}</DataTitle>
          <DataInfo>
            {data.dataInformation}
            <span>{data.dataUnit}</span>
          </DataInfo>
        </DataDisplay>
        {children && <DataHidden boxToggle={boxToggle}>{children}</DataHidden>}
      </DataInnerWrap>
      {children && (
        <DataOpen boxToggle={boxToggle}>
          <i className="fas fa-plus"></i>
        </DataOpen>
      )}
    </DataWrap>
  );
};

export default Databox;
