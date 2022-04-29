import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
const Goal = () => {

  return (
    <Box component="section">
      <div className={classes.goalSection}>
        <Container maxWidth="lg" className="h-100" sx={{ position: "relative" }}>
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            目標
          </Typography>

          <Grid container>
            <Grid item xs={4} sx={{ borderRight: "1px solid #e8e8e8" }}>
              <div className={classes.goalBox}>
                <div className={classes.goalTitleRow}>
                  <BuildIcon></BuildIcon>
                  <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                    短期目標
                  </Typography>
                </div>
                <Typography variant="subtitle1" component="div">
                  廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4} sx={{ borderRight: "1px solid #e8e8e8" }}>
              <div className={classes.goalBox}>
                <div className={classes.goalTitleRow}>
                  <BuildIcon></BuildIcon>
                  <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                    中期目標
                  </Typography>
                </div>
                <Typography variant="subtitle1" component="div">
                  廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.goalBox}>
                <div className={classes.goalTitleRow}>
                  <BuildIcon></BuildIcon>
                  <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                    長期目標
                  </Typography>
                </div>
                <Typography variant="subtitle1" component="div">
                  廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Goal