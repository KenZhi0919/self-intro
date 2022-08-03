import classes from './index.module.sass'
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'

const Intro = () => {
  const card = [
    { icon: 'Html', height: 100, width: 70 },
    { icon: 'Css', height: 100, width: 70 },
    { icon: 'Js', height: 100, width: 70 },
    { icon: 'Vue', height: 80, width: 95 },
    { icon: 'React', height: 80, width: 90 },
  ]

  return (
    <Box component="section">
      <div className={classes.introSection}>
        <Container maxWidth="lg" className="h-100">
          <Grid container sx={{ marginTop: "50px" }}>
            <Grid item xs={6}>
              <Typography variant="h2" component="div" sx={{ fontWeight: "bold" }}>
                關於我
              </Typography>
              <Typography variant="h6" component="div" sx={{ margin: '40px 0', whiteSpace: 'pre-wrap' }}>
                我是陳健誌，今年 25 歲，畢業於雲林科技大學資訊管理系，已有兩年的前端工程師經驗，在前公司主要是寫 Vue，目前正持續努力學習 React 中，期望自己在將來可以學習更多不同的框架及技術，朝著資深工程師的方向邁進。平常的興趣是打撞球、健身、打電玩和看動畫，如果有相同興趣的朋友歡迎找我切磋切磋，很開心能夠加入弈樂這個大家庭。
              </Typography>

            </Grid>
            <Grid item xs={6}>
              <div className="h-100 d-flex justify-center align-center">
                <img className={classes.introImage} src={require('../../static/team.jpg')} />
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