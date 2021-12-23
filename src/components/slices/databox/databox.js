import React, { useState } from "react";
import {
  DataWrap,
  DataInnerWrap,
  DataDisplay,
  DataHeader,
  DataInfo,
  DataInfoItem,
  DataHidden,
  DataOpen,
} from "../databox/databoxStyles";

const Databox = ({ data }) => {
  //TODO: Destructure the data object
  const { dataTitle, dataInfo } = data;

  //TODO: Monitor the state of data box toggle (Opening & Closing)
  const [boxToggle, setBoxToggle] = useState(false);

  //TODO: Event => Switch the data box (open or close) state on Click
  const handleBoxToggle = () => {
    setBoxToggle(!boxToggle);
  };

  return (
    <DataWrap>
      <DataInnerWrap>
        <DataDisplay>
          <DataHeader>
            <h3>{dataTitle}</h3>
          </DataHeader>
          <DataInfo>
            {dataInfo.map((info) => {
              return (
                <DataInfoItem key={info.id}>
                  <h4>{info.infoTitle}</h4>
                  <h5>{info.infoDescription}</h5>
                </DataInfoItem>
              );
            })}
          </DataInfo>
        </DataDisplay>
        <DataHidden boxToggle={boxToggle}>This is the hidden data.</DataHidden>
      </DataInnerWrap>

      <DataOpen onClick={handleBoxToggle} boxToggle={boxToggle}>
        <i className="fas fa-plus"></i>
      </DataOpen>
    </DataWrap>
  );
};

export default Databox;
