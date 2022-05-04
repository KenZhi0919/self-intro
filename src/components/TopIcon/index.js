import classes from './index.module.sass'
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone'
const TopIcon = () => {
  window.addEventListener('scroll', () => {
    const scroll = document.querySelector('.scorllbtn')
    if (scroll) {
      scroll.classList.toggle("active", window.scrollY > 500)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={`${classes.topIcon} scorllbtn d-flex justify-center align-center`} onClick={scrollToTop}>
      <ArrowUpwardTwoToneIcon></ArrowUpwardTwoToneIcon>
    </div>
  )
}

export default TopIcon