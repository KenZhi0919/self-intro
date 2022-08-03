import classes from './index.module.sass'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Intro, Hobby, Experience, Goal, } from '../../pages'
import { TopIcon } from '../../components'
import 'animate.css'
import { useState } from 'react'

const Home = () => {
  const [showAKA , setShowAKA] = useState(false)
  const [showSecond , setShowSecond] = useState(false)
  return (
    <>
      <TopIcon />
      <Box component="section" sx={{ overFlow: "hidden" }} >
        <div className={`${classes.home} h-100vh`}>
          <Container maxWidth="lg" className="h-100" style={{ position: 'relative' }}>
            {/* content start */}
            <div className="h-100 d-flex align-center">
              <Grid container sx={{ marginTop: "50px" }}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={9} className={classes.title} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: '300px' }}>
                  <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }} onClick={() => {
                    setShowAKA(true)
                  }}>
                    陳健誌 Ken
                  </Typography>

                  { showAKA && !showSecond &&
                      <Typography 
                        className='animate__animated animate__bounceInRight' 
                        variant="h3" 
                        component="div" 
                        sx={{ fontWeight: "bold" }}
                        onClick={() => {
                          setShowSecond(true)
                        }}
                      >
                        aka 菜尾的同學
                      </Typography>
                    }

                    { showSecond && 
                      <Typography 
                        className='animate__animated animate__bounceInRight' 
                        variant="h3" 
                        component="div" 
                        sx={{ fontWeight: "bold" }}
                      >
                        aka 第一次騎車就騎到乾嘔的菜雞
                      </Typography>
                    }

                  <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                    Front-End Engineer
                  </Typography>

                </Grid>
                <Grid container sx={{ marginTop: "100px" }}>
                  <Grid item xs={4} className={classes.description}>
                    <p className={classes.descriptionTitle}>Instagram</p>
                    <p className={classes.descriptionContent}>ken_zhiii</p>
                  </Grid>

                  <Grid item xs={4} />

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
      <Intro />
      <Hobby />
      <Experience />
      <Goal />
    </>
  )
}

export default Home