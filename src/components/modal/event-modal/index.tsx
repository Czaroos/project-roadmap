import React, { useContext, useState } from "react";

import { Input, Button } from "../..";

import { createProject } from "../../../firebase";

import UserContext from "../../../providers/UserContext";

import { ModalProps } from "./model";

import "./style.scss";

export const EventModal = ({ setModalOpen }: ModalProps) => {
  const [projectName, setProjectName] = useState("");

  const currentUser = useContext(UserContext);

  const handleSubmit = async () => {
    //TODO: complete validation
    if (projectName == "") {
      alert("Project name cannot be empty");
      return;
    }

    await createProject(projectName, currentUser.id);
    setProjectName("");
    setModalOpen(false);
  };

  return (
    <div className="modal" onClick={() => setModalOpen(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="nameInput">
          <h4>Set new event name:</h4>
          <Input onChange={(e) => setProjectName(e.target.value)} />
        </div>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </div>
    </div>
  );
};
