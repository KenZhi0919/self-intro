import classes from './index.module.sass'
import { Box, Container, Typography, Grid } from '@mui/material'
import { FlowLine } from '../../components'
import { useEffect, useState } from 'react'
import { apiGetExperience } from '../../api/apiExperience'
import useStore from '../../store/store'

const Experience = () => {
  const [experienceList, setExperienceList] = useState([{ experience: '', positionName: '', period: '', content: [], image: '' }])
  const [flowIndex, setFlowIndex] = useState(0)
  const useAnimation = useStore(state => state.useAnimation)


  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const { data } = await apiGetExperience()
        setExperienceList(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchExperience()
  }, [])

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
                  <Typography variant="h5" component="div" sx={{ fontWeight: "bold", marginRight: "10px" }}>
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
                          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                            {el.title}
                          </Typography>
                          <Typography variant="subtitle1" component="div" sx={{ ml: 3 }}>
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