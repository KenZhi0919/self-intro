import * as React from "react"
import { styled } from "@mui/material/styles"
import { Stack, Stepper, Step, StepLabel } from "@mui/material"

import SchoolIcon from '@mui/icons-material/School'
import GroupAddIcon from "@mui/icons-material/GroupAdd"

import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector"

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 28
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
}))

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 60,
  height: 60,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(290deg, #f79a64 0%, #fcd36a 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  }),
}))

function ColorlibStepIcon(props) {
  const { active } = props

  const icons = {
    1: <SchoolIcon />,
    2: <SchoolIcon />,
    3: <GroupAddIcon />,
  }

  return (
    <ColorlibStepIconRoot
      ownerState={{ active }}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const steps = [
  "益民國小",
  "雲林科技大學",
  "昕力資訊",
]

export default function FlowLine({ flowIndex, setFlowIndex }) {
  const handleStep = (step) => () => {
    setFlowIndex(step)
  }

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        nonLinear
        alternativeLabel
        activeStep={flowIndex}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon} onClick={handleStep(index)} sx={{ cursor: "pointer" }}>
              <span style={{fontSize: '18px'}}>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
