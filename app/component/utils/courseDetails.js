
import { Btn } from './Allbtn'
import Border from './Border'
import styles from './Course.module.css'
export default function CoursesDetails({data,index}) {
    
    return (<>
        <Border />
        <div className={styles.container}
            style={{
                flexDirection:data[index].direction
            }}
        >
            <div className={styles.detailText}>
                <div className={styles.heading}>
                    {data[index].heading}
                </div>
                <div className={styles.details}>
                {data[index].text.map((para,ind)=>{
                    return (
                        <p key={ind}>{para}</p>
                    )
                })}
                <Btn name={'Learn More'}/>
                </div>
            </div>
            <div className={styles.imgContainer}>
            <img className={styles.image} src={data[index].imgUrl} alt="Image" />
            </div>
        </div>
        </> )
}