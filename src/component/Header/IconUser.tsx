import style from "./Header.module.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const IconUser = () => {
  return (
    <div className={style.user_icon}>
        <AccountCircleIcon style={{ color: '#2893B7' }}/>
    </div>
  )
}
