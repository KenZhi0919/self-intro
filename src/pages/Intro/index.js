import classes from './index.module.sass'
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { useEffect, useState } from 'react'
import { apiGetIntro } from '../../api/apiIntro'

const Intro = () => {
  const card = [
    { icon: 'Html', height: 100, width: 70 },
    { icon: 'Css', height: 100, width: 70 },
    { icon: 'Js', height: 100, width: 70 },
    { icon: 'Vue', height: 80, width: 95 },
    { icon: 'React', height: 80, width: 90 },
  ]

  const [motto, setMotto] = useState("")
  const [introContent, setIntroContent] = useState("")

  useEffect(() => {
    const fetchIntroData = async () => {
      try {
        const { data } = await apiGetIntro()
        setMotto(data.motto)
        setIntroContent(data.introContent)
      } catch (e) {
        console.log(e)
      }
    }

    fetchIntroData()
  }, [])

  return (
    <Box component="section">
      <div className={classes.introSection}>
        <Container maxWidth="lg" className="h-100">
          <Grid container sx={{ marginTop: "50px" }}>
            <Grid item xs={6}>

              <Typography variant="h2" component="div" sx={{ fontWeight: "bold" }}>
                關於我
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ margin: '40px 0', whiteSpace: 'pre-wrap' }}>
                {introContent}
              </Typography>
              <Typography variant="h5" component="div" sx={{ color: '#ff8553', fontWeight: "bold" }} gutterBottom>
                &quot;{motto}&quot;
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
                    <div className="d-flex direction-column align-center justify-center" style={{ "paddingTop": "10px" }} >
                      <div className="d-flex align-center justify-center" style={{ height: '100px', width: '100px' }}>
                        <CardMedia
                          component="img"
                          sx={{ height: `${item.height}px`, width: `${item.width}px` }}
                          image={require(`../../static/${item.icon}.png`)}
                        />
                      </div>
                      <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
                        {item.icon}
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