import React from "react";
import { Row, Label, Button, CustomInput } from "reactstrap";

const Notification = (props) => {
  return (
    <div>
      <h4 className="mt-4 mb-4">Notification</h4>
      <div className="border rounded p-3 ml-4 mr-4">
        <Row className="mt-2 mb-2 offset-lg-3">
          <Label className="mt-1 pl-5 col-lg-5 col-8 m-0 p-0">
            Send All Alerts :
          </Label>
          <CustomInput
            type="switch"
            id="alertsSwitch"
            className="col-lg-1 col-4 p-0"
          />
        </Row>
        <Row className="mt-2 mb-2 offset-lg-3">
          <Label className="mt-1 col-lg-5 col-8 m-0 p-0">
            Alerts Only Task Success :{" "}
          </Label>
          <CustomInput
            type="switch"
            id="successSwitch"
            className="col-lg-1 col-4 p-0"
          />
        </Row>
        <Row className="mt-2 mb-2 offset-lg-3">
          <Label className="mt-1 col-lg-5 col-8 m-0 p-0">
            Alert Only For Failed Tasks:
          </Label>
          <CustomInput
            type="switch"
            id="failedSwitch"
            className="col-lg-1 col-4 p-0"
          />
        </Row>
        <Row className="mt-2 mb-2 offset-lg-3">
          <Label className="mt-1 col-lg-5 col-8 m-0 p-0">
            I Do Not Want Any Alerts :
          </Label>
          <CustomInput
            type="switch"
            id="noAlertsSwitch"
            className="col-lg-1 col-4 p-0"
          />
        </Row>
        <Row className="offset-lg-6 mt-5 mb-3 offset-4">
          <Button color="success" className="offset-lg-6 m-1">
            Save
          </Button>
          <Button color="danger" className="m-1">
            Cancel
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Notification;
