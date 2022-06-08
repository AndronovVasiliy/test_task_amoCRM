import style from "./Header.module.scss"
import { Logo } from './Logo'
import { IconUser } from './IconUser'
import { Search } from "./Search"
import PCIconUser from "./PCIconUser"

function Header() {

  const screenWidth = window.screen.width

  return (
    <div className={style.header}>
        <Logo />
        <Search />
        <IconUser />
        <PCIconUser />
    </div>
  )
}

export default Header