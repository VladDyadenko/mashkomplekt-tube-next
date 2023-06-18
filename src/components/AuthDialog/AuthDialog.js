"use client";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import Main from "./form/main";
import Register from "./form/Register";
import Login from "./form/Login";

function AuthDialog({ open, handleClose }) {
  const [formType, setFormType] = useState("main");

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <>
            {formType === "main" && <Main setFormType={setFormType} />}
            {formType === "register" && <Register setFormType={setFormType} />}
            {formType === "login" && <Login setFormType={setFormType} />}
          </>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Закрити
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthDialog;
