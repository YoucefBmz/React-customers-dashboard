import React, { useState } from "react";
import { Table, Tag, Button, Collapse } from "antd";

import { Link } from "react-router-dom";
import { useDrivers } from "../hooks/useQueries";

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

/*

Drivers table:
Drivers table contains the following column:
1. Full name includes two line:
   - Main line represents full name
   - Subline grayed and in smaller font size represents drivers 
   national identification number (NIDN)

2. Direction : the management the driver belongs to (ALGIERS, CONSTANTINE)

3. Status: (AVAILABLE, IN MISSION, SUSPENDED)


Driver detail:
Includes the following items:
1. Driver's information: includes
  - Driver firstname
  - Driver lastname
  - Phone number
  - NIDN 
  - Status
  - Direction

2. Suspend/Unsuspend driver: button to toggle driver status between
 SUSPEND and AVAILABLE states.

3. Edit driver information: button to enable driver's information edition.

*/
