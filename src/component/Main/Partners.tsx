import style from './Main.module.scss'

interface PropsType {
    id: number,
    img: string
}

function Partners(props: PropsType) {
    return (
        <div className={style.partners}>
            <img width={'40px'} src={props.img} />
        </div>
    )
}

export default Partners
