import classes from './index.module.sass'
import { Box, Container, Avatar, Grid, Typography } from '@mui/material'
const Home = () => {

  return (
    <Box component="section">
      <div className={`${classes.home} h-100vh`}>
        <Container maxWidth="lg" className="h-100" style={{ position: 'relative' }}>
          {/* content start */}
          <div className="h-100 d-flex align-center">
            <Grid container sx={{ marginTop: "50px" }}>
              <Grid item xs={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '290px', height: '290px' }} />
              </Grid>
              <Grid item xs={8} className={classes.title} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                  陳健誌 Ken
                </Typography>

                <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                  Front-End Engineer
                </Typography>

                <p style={{ color: "black" }}>......</p>
              </Grid>
              <Grid container sx={{ marginTop: "100px" }}>
                <Grid item xs={4} className={classes.description}>
                  <p className={classes.descriptionTitle}>Design For</p>
                  <p className={classes.descriptionContent}>Web</p>
                </Grid>

                <Grid item xs={4} className={classes.description} sx={{ textAlign: "end" }}>
                  <p className={classes.descriptionTitle}>Design For</p>
                  <p className={classes.descriptionContent}>Web</p>
                </Grid>

                <Grid item xs={4} className={classes.description} sx={{ textAlign: "end" }}>
                  <p className={classes.descriptionTitle}>Email</p>
                  <p className={classes.descriptionContent}>
                    <u>z121356777@gmail.com</u>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </div>
          {/* content end */}
        </Container>
      </div >
    </Box >
  )
}

export default Home