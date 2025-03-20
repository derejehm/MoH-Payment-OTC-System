import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, userData, userRole }) => {
  return (
    <Modal
      open={isOpen}
      onClose={(event, reason) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          onClose();
        }
      }}
      disableEscapeKeyDown
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold" color="primary" id="confirmation-modal-title">
            <InfoIcon sx={{ fontSize: 30, verticalAlign: "middle", mr: 1 }} />
            Please Confirm
          </Typography>
          <IconButton onClick={onClose} color="primary" aria-label="close modal">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Warning Message */}
        <Typography variant="body1" textAlign="center" mt={2} id="confirmation-modal-description">
          Are you sure you want to delete the {userRole ? `role "${userRole}"` : "user"}{" "}
          <strong>{userData}</strong>?
        </Typography>

        {/* Buttons */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onConfirm(userData); // Run the parent's function on confirm
            //   onClose(); // Close the modal
            }}
            sx={{ mx: 1 }}
            aria-label="confirm deletion"
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ mx: 1 }}
            aria-label="cancel deletion"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Modal Styles
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
  textAlign: "center",
};

export default ConfirmationModal;
