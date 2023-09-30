import style from '../All.module.css'

export const Btn =  ({name,width,onClick}) => {
    return (
        <div className={style.allBtn} style={{
            width:width ? width : ''
        }}
            onClick ={onClick}
        > 
            {name}
        </div>
    )
}