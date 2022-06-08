import { Search } from '../Header/Search'
import { Listpartners } from './Listpartners'
import style from './Main.module.scss'

const Main = () => {

  return (
    <div className={style.main}>
        <h1 className={style.title}>Наши партнеры</h1>
        <Listpartners />
    </div>
  )
}

export default Main