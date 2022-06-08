import style from "./Header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import search from "./img/Ellipse.png"


export const Search = () => {
  return (
    <div className={style.search}>
        <div className={style.img_search}></div>
        <input placeholder="Найти..."/>
    </div>
  )
}
