
'use client'
import { Btn } from './Allbtn'
import Border from './Border'
import styles from './Course.module.css'
import { useRouter } from 'next/navigation'
export default function CoursesDetails({data,index,isBtnShow}) {
    const router = useRouter()
   
    function handleClick(path) {
        router.push(`/courses/${path}`)
    }
    return (<>
        <Border />
        <div className={styles.container}
            style={{
                flexDirection:data[index]?.direction
            }}
        >
            <div className={styles.detailText}>
                <div className={styles.heading}>
                    {data[index]?.heading}
                </div>
                <div className={styles.details}>
                {data[index].text.map((para,ind)=>{
                    return (
                        <p key={ind}>{para}</p>
                    )
                })}
                {
                    isBtnShow ? <Btn name={'Learn More'} onClick = {()=>{
                        handleClick(data[index]?.path)
                    }} />:""
                }
                
                </div>
            </div>
            <div className={styles.imgContainer}>
            <img className={styles.image} src={data[index]?.imgUrl} alt="Image" />
            </div>
        </div>
        </> )
}