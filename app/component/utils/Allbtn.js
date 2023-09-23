import style from '../All.module.css'

export const Btn =  ({name,width}) => {
    return (
        <div className={style.allBtn} style={{
            width:width ? width : ''
        }}> 
            {name}
        </div>
    )
}