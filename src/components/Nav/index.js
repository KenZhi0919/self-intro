import classes from './index.module.sass'
import { Link, useLocation } from 'react-router-dom'


const Nav = () => {
  let location = useLocation()

  return (
    <nav className={`w-100 nav-bar ${classes.nav} ${location.pathname === '/' ? '' : 'active'}`}>
      <ul className='d-flex justify-center'>
        <Link to='/' >
          <li className={classes.navItem}>
            首頁
          </li>
        </Link>
        <Link to='/intro'>
          <li className={classes.navItem}>
            關於我
          </li>
        </Link>
        <Link to='/experience'>
          <li className={classes.navItem}>
            學經歷
          </li>
        </Link>
        <Link to='/hobby'>
          <li className={classes.navItem}>
            興趣
          </li>
        </Link>
        <Link to='/goal'>
          <li className={classes.navItem}>
            目標
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav