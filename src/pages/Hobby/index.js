import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import { AppModal } from '../../components'
import clsx from 'clsx'
import { useRef } from 'react'
const Hobby = () => {
  const appModal = useRef(null)
  return (
    <Box component="section">
      <div className={classes.hobbySection}>
        <Container maxWidth="lg" className="h-100">
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            興趣
          </Typography>

          <AppModal ref={appModal}>
            123
          </AppModal>

          <Grid container spacing={4}>
            <Grid item xs={4} onClick={() => {
              appModal.current.handleOpen()
            }}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.poolImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    撞球
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.dumbbelImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    健身
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.gamingImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    電玩
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.animeImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    動漫
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.animeImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    動漫
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.animeImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    動漫
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Hobby