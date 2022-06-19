import React from "react";
import { Collapse } from "antd";

//import { Link } from "react-router-dom";

const { Panel } = Collapse;

const Drivers = () => {
  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  return (
    <>
      <h2>Questions</h2>
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header='This is Question number 1' key='1'>
          {text}
        </Panel>
        <Panel header='This is Question number 2' key='2'>
          {text}
        </Panel>
        <Panel header='This is question number 3' key='3'>
          {text}
        </Panel>
      </Collapse>
    </>
  );
};

export default Drivers;
