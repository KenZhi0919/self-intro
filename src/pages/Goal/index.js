import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import CheckIcon from '@mui/icons-material/Check'
import useStore from '../../store/store'

const goalData = [
  {
    "title": "短期目標",
    "goalList": ["認識大家", "熟悉 React"]
  },
  {
    "title": "中期目標",
    "goalList": ["認識大家", "熟悉 React", "了解專案"]
  },
  {
    "title": "長期目標",
    "goalList": ["認識大家", "熟悉 React", "學習更多專案需要的技術"]
  }
]

const Goal = () => {
  const useAnimation = useStore(state => state.useAnimation)

  window.addEventListener('scroll', () => {
    const scroll = document.querySelector(`.${classes.goalSection}`)
    if (scroll && window.scrollY > scroll.offsetTop - 350) {
      scroll.classList.add("active")
    }
  })

  return (
    <Box component="section" sx={{ overflow: 'hidden' }}>
      <div className={`${classes.goalSection} ${useAnimation ? 'moveInRight' : ''}`}>
        <Container maxWidth="lg" className="h-100" sx={{ position: "relative" }}>
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            目標
          </Typography>

          <Grid container>
            {goalData && goalData.map((el, index) => (
              <Grid key={index} item xs={4} >
                <div className={classes.goalBox} style={{ borderRight: index + 1 === goalData.length ? '' : '1px solid #e8e8e8' }}>
                  <div className={classes.goalTitleRow}>
                    <BuildIcon></BuildIcon>
                    <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                      {el.title}
                    </Typography>
                  </div>
                  <Typography variant="subtitle1" component="div">
                    <ul>
                      {el.goalList && el.goalList.map((el, index) => (
                        <li key={index}>
                          <div className="d-flex align-center">
                            <CheckIcon sx={{ mr: 1 }} /> {el}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Goal