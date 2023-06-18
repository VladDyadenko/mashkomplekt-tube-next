"use client";
const {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} = require("@mui/material");

function RegisterForm({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Button
              fullWidth
              className="text-textColor mb-4"
              variant="contained"
            >
              Google
            </Button>
            <Button
              fullWidth
              className="text-textColor mb-4"
              variant="contained"
            >
              Пошта
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RegisterForm;
