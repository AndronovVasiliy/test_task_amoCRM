import style from "./Header.module.scss"

function PCIconUser() {

    return (
        <div className={style.pc_icon_user}>
            <h4 className={style.name}>Константин</h4>
            <div className={style.border}>
                <img className={style.person_photo} src={'https://s00.yaplakal.com/pics/pics_original/6/7/6/16250676.jpg'} />
            </div>
        </div>
    )
}

export default PCIconUser