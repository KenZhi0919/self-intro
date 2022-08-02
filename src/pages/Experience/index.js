import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import { FlowLine } from '../../components'
import { useState } from 'react'
import useStore from '../../store/store'

const experienceList =  [
  {
    "experience": "益民國小",
    "positionName": "",
    "period": "",
    "des": "",
    "content": [
      { "title": "校隊", "item": ["巧固球", "皮影戲"] },
    ],
    "image": "https://storage.googleapis.com/school-parenting-com-tw/school/uploads/badges/4351272e8512c5186943f470eb9c4b0d23f73e9a.jpeg"
  },
  {
    "experience": "雲林科技大學",
    "positionName": "資訊管理系",
    "period": "2015-2019",
    "des": "",
    "content": [
      { "title": "社團", "item": ["撞球社", "滑板社", "健身社"] },
      { "title": "打工", "item": ["麥當勞"] },
    ],
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/National_Yunlin_University_of_Science_and_Technology_logo.svg/1200px-National_Yunlin_University_of_Science_and_Technology_logo.svg.png"
  },
  {
    "experience": "昕力資訊",
    "positionName": "前端工程師",
    "period": "2020-2022",
    "content": [
      {
        "title": "專案",
        "item": ["國泰PMD績效管理系統", "昕力資訊OKR系統", "國泰職務適配系統"]
      }
    ],
    "image": "https://www.tpisoftware.com/images/header/logo-tw.svg"
  },
]

const Experience = () => {
  const [flowIndex, setFlowIndex] = useState(0)
  const useAnimation = useStore(state => state.useAnimation)

  window.addEventListener('scroll', () => {
    const scroll = document.querySelector(`.${classes.experienceSection}`)
    if (scroll && window.scrollY > scroll.offsetTop - 350) {
      scroll.classList.add("active")
    }
  })

  return (
    <Box component="section">
      <div className={`${classes.experienceSection} ${useAnimation ? 'moveInLeft' : ''}`}>
        <Container maxWidth="lg" className="h-100" sx={{ position: "relative" }}>
          <Typography variant="h2" component="div" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
            學經歷
          </Typography>

          <Grid container>
            <Grid item xs={12}>
              <FlowLine flowIndex={flowIndex} setFlowIndex={setFlowIndex} />
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: "50px 100px" }}>
                <div className="d-flex">
                  <Typography variant="h4" component="div" sx={{ fontWeight: "bold", marginRight: "10px" }}>
                    {experienceList[flowIndex].positionName}
                  </Typography>
                  <div className="d-flex align-center" style={{ color: "#949494" }}>
                    {experienceList[flowIndex].period}
                  </div>
                </div>
                <Grid container>
                  <Grid item xs={6}>
                    <div className="d-flex">
                      {experienceList && experienceList[flowIndex].content.map((el, index) => (
                        <div key={index} style={{ "marginLeft": "50px" }}>
                          <Typography variant="h5" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                            {el.title}
                          </Typography>
                          <Typography variant="h6" component="div" sx={{ ml: 3 }}>
                            <ul>
                              {el.item && el.item.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="d-flex justify-center">
                      <img src={experienceList[flowIndex].image} style={{ height: '220px' }} />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div >
    </Box >
  )
}

export default Experience