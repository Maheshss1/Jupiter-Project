import React from "react";
import { Label, Input, Row, CustomInput, Button } from "reactstrap";

const Task = (props) => {
  return (
    <div>
      <h4 className="mt-4 mb-4">Task 1</h4>
      <div className="border rounded p-3">
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="col-lg-3 col-4">Source Name</Label>
          <Input type="select" className="col-lg-3 col-7">
            <option value="Wikipedia">Wikipedia</option>
            <option value="Google">Google</option>
            <option value="Quora">Quora</option>
            <option value="Reddit">Reddit</option>
          </Input>
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="col-lg-3 col-4">Enable Logging</Label>
          <CustomInput type="switch" id="enableLogging" />
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="col-lg-3 col-4">Provide SQL</Label>
          <Input
            type="textarea"
            placeholder="Provide SQL Here"
            rows="5"
            className="col-lg-5 col-7"
          />
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="col-lg-3 col-4">Target Result</Label>
          <Input type="select" className="col-lg-3 col-7">
            <option value="MySQL">MySQL</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Redis DB">Redis DB</option>
            <option value="Postgre SQL">Postgre SQL</option>
            <option value="SQL Server">SQL Server</option>
          </Input>
        </Row>
        <Row className="offset-lg-6 mt-4 offset-2">
          <Button color="primary" className="m-2">
            Validate
          </Button>
          <Button color="success" className="m-2">
            Submit
          </Button>
          <Button color="danger" className="m-2">
            Cancel
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Task;
