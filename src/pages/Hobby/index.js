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
          </AppModal>

          <Grid container spacing={4}>
            <Grid item xs={6} onClick={() => {
              appModal.current.handleOpen('skate')
            }}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.fallImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    滑倒
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} onClick={() => {
              appModal.current.handleOpen('pool')
            }}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.poolImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    撿球
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} onClick={() => {
              appModal.current.handleOpen('barbell')
            }}>
              <div className={classes.imgBox}>
                <div className={clsx([classes.img, classes.dumbbelImg])} />
                <div className={classes.overlay}>
                  <div className={classes.overlayText}>
                    重訓
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
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