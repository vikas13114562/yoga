
import style from '../All.module.css'
export default function Heading({name}) {
    return (
        <div className={style.mainHeading}>{name}</div>
    )
}