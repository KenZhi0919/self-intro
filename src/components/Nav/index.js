import classes from './index.module.sass'

const Nav = () => {
  return (
    <nav className={`w-100 ${classes.nav}`}>
      <ul className='d-flex justify-center'>
        <li className={classes.navItem}>
          <a href='#'>Home</a>
        </li>
        <li className={classes.navItem}>
          <a href='#'>Intro</a>
        </li>
        <li className={classes.navItem}>
          <a href='#'>Hobby</a>
        </li>
        <li className={classes.navItem}>
          <a href='#'>Experience</a>
        </li>
        <li className={classes.navItem}>
          <a href='#'>Goals</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav