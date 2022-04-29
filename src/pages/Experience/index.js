import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import { FlowLine } from '../../components'

const Experience = () => {

  return (
    <Box component="section">
      <div className={classes.experienceSection}>
        <Container maxWidth="lg" className="h-100" sx={{ position: "relative" }}>
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            學經歷
          </Typography>

          <Grid container>
            <Grid item xs={12}>
              <FlowLine />
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: "50px 100px" }}>
                <div className="d-flex">
                  <Typography variant="h6" component="div" sx={{ fontWeight: "bold", marginRight: "10px" }}>
                    資訊管理系
                  </Typography>
                  <div className="d-flex align-center" style={{ color: "#949494" }}>
                    2015-2019
                  </div>
                </div>
                <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
                  廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知：步府毛立機轉面，作民線內不外政教，少造室發打性說國人和為經好利天經學動對取越下大觀個朋把心而使個不接到安因由有及交登童知研用山事感什機雜的現關星受是業現失對？星素於分式家議我負真，院實動微中水安本出保人讀！起裡基區操舉用建。廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知：步府毛立機轉面，作民線內不外政教，少造室發打性說國人和為經好利天經學動對取越下大觀個朋把心而使個不接到安因由有及交登童知研用山事感什機雜的現關星受是業現失對？星素於分式家議我負真，院實動微中水安本出保人讀！起裡基區操舉用建。
                </Typography>
              </div>

            </Grid>
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Experience