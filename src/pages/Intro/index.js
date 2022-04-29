import classes from './index.module.sass'
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'

const Intro = () => {
  const card = ['', '', '', '', '']
  return (
    <Box component="section">
      <div className={classes.introSection}>
        <Container maxWidth="lg" className="h-100">
          <Grid container sx={{ marginTop: "50px" }}>
            <Grid item xs={6}>

              <Typography variant="h2" component="div" sx={{ fontWeight: "bold" }}>
                關於我
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ margin: '40px 0' }}>
                廠民的業力不洋成親助出光雖平天，操頭社還前有得一……整政形，舞中服來不盡片一，比自不像這朋和送深善灣造！的步參少象母小望提我引心能展富際高這不臺情還間機呢又發，內聽國時個接南形稱身是汽大前能的難表學：因造們區知：步府毛立機轉面，作民線內不外政教，少造室發打性說國人和為經好利天經學動對取越下大觀個朋把心而使個不接到安因由有及交登童知研用山事感什機雜的現關星受是業現失對？星素於分式家議我負真，院實動微中水安本出保人讀！起裡基區操舉用建。
              </Typography>
              <Typography variant="h5" component="div" sx={{ color: '#ff8553', fontWeight: "bold" }} gutterBottom>
                &quot;廠民的業力不洋成親助出光雖平天&quot;
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <div className="h-100 d-flex justify-center align-center">
                <img className={classes.introImage} src={require('../../static/intro.jpg')} />
              </div>
            </Grid>

            {/* card start */}
            <div className={classes.cardRow}>
              {card && card.map((item, index) => (
                <Card key={index} className={classes.card} sx={{ width: 180, height: 190, boxShadow: 3, marginRight: 4, transition: '.3s' }}>
                  <CardContent>
                    <div className="d-flex direction-column align-center justify-center" >
                      <CardMedia
                        component="img"
                        sx={{ height: "80px", width: "90px", marginTop: 2 }}
                        image={require('../../static/React-icon.svg.png')}
                      />
                      <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                        React
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* card end */}
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Intro