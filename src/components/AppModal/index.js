import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Typography from "@mui/material/Typography"
import { useImperativeHandle } from 'react'
import Carousel from '../Carousel'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}
const AppModal = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  useImperativeHandle(ref, () => {
    return {
      handleOpen
    }
  })
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Carousel></Carousel>
        </Box>
      </Fade>
    </Modal>
  )
})

AppModal.displayName = "AppModal"
export default AppModal