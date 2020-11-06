import React, { useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase";

import { Button, Avatar, Modal } from "..";

import { PlusIcon } from "../../assets";

import UserContext from "../../providers/UserContext";

import { HeaderProps } from "./model";

import "./style.scss";

export const Header = ({ projectName }: HeaderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const currentUser = useContext(UserContext);

  const history = useHistory();

  const handleLogout = useCallback(async () => {
    await auth.signOut();
    history.push("/");
  }, []);

  return (
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className={`header ${currentUser ? "userLogged" : ""}`}>
        {currentUser ? (
          <>
            <Button variant="round" onClick={() => setModalOpen(true)}>
              <PlusIcon />
            </Button>

            <h2 className="projectName">{`${
              projectName ? projectName : "YOUR PROJECTS"
            }`}</h2>

            <div className="userActions">
              <Avatar
                displayName={currentUser.displayName}
                onClick={() => history.push(`/dashboard/${currentUser.id}`)}
              />
              <Button onClick={handleLogout}>LOG OUT</Button>
            </div>
          </>
        ) : (
          <>
            <Button onClick={() => history.push("/")}>LOG IN</Button>
            <Button onClick={() => history.push("/register")}>REGISTER</Button>
          </>
        )}
      </div>
    </>
  );
};
