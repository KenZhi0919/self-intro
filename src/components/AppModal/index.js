import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { useImperativeHandle } from 'react'
import Carousel from '../Carousel'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}
const AppModal = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false)

  const [type, setType] = React.useState('')

  const handleOpen = (type) => {
    setOpen(true)
    setType(type)
  }
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
          { type === 'pool' && 
            <iframe width="1200" height="600" src="https://www.youtube.com/embed/CRtwvzCyI7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }
          { type === 'barbell' &&
            <Carousel type='barbell' style={{width: '800px'}} />
          }
          { type === 'skate' &&
            <iframe width="1200" height="600" src="https://www.youtube.com/embed/M8Wo5_yiGu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }
        </Box>
      </Fade>
    </Modal>
  )
})

AppModal.displayName = "AppModal"
export default AppModal