import classes from './index.module.sass'
import { Grid, Container } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container maxWidth="lg" className="h-100">
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={6} sx={{ color: '#ff8553' }}>
            <div className="d-flex direction-column h-100 justify-center align-center">
              <div>
                <div className={classes.footerTitle}>
                  Follow Me
                </div>
                <div className='d-flex text-white mt-2'>
                  <FacebookIcon className={classes.footerIcon} />
                  <InstagramIcon className={classes.footerIcon} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ color: '#ff8553' }}>
            <div className="d-flex direction-column h-100 justify-center align-center">
              <div>
                <div className={classes.footerTitle}>
                  Contact Me
                </div>
                <div className={`d-flex text-white mt-2 ${classes.footerEmail}`}>
                  z121356777@gmail.com
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer