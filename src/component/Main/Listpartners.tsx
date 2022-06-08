import style from './Main.module.scss'
import i1 from './img/1.png'
import i2 from './img/2.png'
import i3 from './img/3.png'
import i4 from './img/4.png'
import Partners from './Partners'


export const Listpartners = () => {

    const listPartnersLabel = [
        {id: 1, img: i1},
        {id: 2, img: i2},
        {id: 3, img: i3},
        {id: 4, img: i4},
        {id: 5, img: "https://s00.yaplakal.com/pics/pics_original/6/7/6/16250676.jpg"},
        {id: 6, img: "https://i.pinimg.com/originals/85/a2/af/85a2afe73417a75a24d0fc0a8bb049ba.jpg"},
    ]

  return (
    <section className={style.list_partners}>
        {listPartnersLabel.map(item => <Partners key = {item.id} {...item} />)}
    </section>
  )
}
