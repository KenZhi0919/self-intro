import classes from './index.module.sass'
import { Box, Container, Avatar, Grid, Typography } from '@mui/material'
import { Intro, Hobby, Experience, Goal, } from '../../pages'
import { TopIcon } from '../../components'
import { useEffect } from 'react'
import useStore from '../../store/store.js'

const Home = () => {
  const fetchUser = useStore(state => state.setUser)
  const user = useStore(state => state.user)

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      <TopIcon />
      <Box component="section" sx={{ overFlow: "hidden" }} >

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
                    {user.name} {user.enName}
                  </Typography>

                  <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                    {user.positionName}
                  </Typography>

                </Grid>
                <Grid container sx={{ marginTop: "100px" }}>
                  <Grid item xs={4} className={classes.description}>
                    <p className={classes.descriptionTitle}>Design For</p>
                    <p className={classes.descriptionContent}>Web</p>
                  </Grid>

                  <Grid item xs={4} />

                  <Grid item xs={4} className={classes.description} sx={{ textAlign: "end" }}>
                    <p className={classes.descriptionTitle}>Email</p>
                    <p className={classes.descriptionContent}>
                      <u>{user.email}</u>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            {/* content end */}
          </Container>
        </div >
      </Box >
      <Intro />
      <Experience />
      <Hobby />
      <Goal />
    </>
  )
}

export default Home