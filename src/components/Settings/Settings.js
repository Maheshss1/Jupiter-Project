import React, { useState } from "react";
import { Row, Label, Input, Button } from "reactstrap";

const Settings = (props) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [profession, setProfession] = useState("");
  const [designation, setDesignation] = useState("");
  const [nameError, setNameError] = useState("");
  const [professionError, setProfessionError] = useState("");
  const [designationError, setDesignationError] = useState("");

  return (
    <>
      <h4 className="mt-4 mb-4">Profile Info</h4>
      <div className="border rounded p-5 ml-4 mr-4">
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="mt-1 mr-2 col-lg-2">Name :</Label>
          <div className="col-lg-6 p-0">
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                if (nameError !== "" && e.target.value.length <= 30)
                  setNameError("");

                setName(e.target.value);
              }}
            />
            <span className="d-block text-danger">{nameError}</span>
          </div>
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="mt-1 mr-2 col-lg-2">DOB : </Label>
          <div className="col-lg-6 p-0">
            <Input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="mt-1 mr-2 col-lg-2">Profession :</Label>
          <div className="col-lg-6 p-0">
            <Input
              type="text"
              value={profession}
              onChange={(e) => {
                if (professionError !== "" && e.target.value.length <= 30)
                  setProfessionError("");

                setProfession(e.target.value);
              }}
            />
            <span className="d-block text-danger">{professionError}</span>
          </div>
        </Row>
        <Row className="offset-lg-4 mt-2 mb-2">
          <Label className="mt-1 mr-2 col-lg-2 d-inline">Designation :</Label>
          <div className="col-lg-6 p-0">
            <Input
              type="text"
              value={designation}
              onChange={(e) => {
                if (designationError !== "" && e.target.value.length <= 30)
                  setDesignationError("");
                setDesignation(e.target.value);
              }}
            />
            <span className="d-block text-danger">{designationError}</span>
          </div>
        </Row>
        <Row>
          <div className="col-lg-8 col-4"></div>
          <Button
            color="success"
            className="m-1"
            onClick={() => {
              if (name.length > 30) {
                setNameError("Name cannot be more than 30 characters");
              }
              if (profession.length > 30) {
                setProfessionError(
                  "Profession cannot be more than 30 characters"
                );
              }
              if (designation.length > 30) {
                setDesignationError(
                  "Designation cannot be more than 30 characters"
                );
              }
            }}
          >
            Save
          </Button>
          <Button color="danger" className="m-1">
            Cancel
          </Button>
        </Row>
      </div>
    </>
  );
};

export default Settings;
