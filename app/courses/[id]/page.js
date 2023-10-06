
import style from '../../component/utils/Course.module.css'
import styles from '../../component/All.module.css'
import CourseAccordion from '@/app/component/utils/CourseAccordion'
import {courseDetailsData} from '../../component/schedule/data'
import Border from '@/app/component/utils/Border'
import FormDialog from '@/app/component/utils/FormDiolog'

export default function Page({ params }) {
    const pathName = params.id
   
    return <div className={style.mainContainer}>
      <div className={styles.mainHeading}>{courseDetailsData[pathName]?.mainHeading ?? "Course"}</div>
      <Border />
      <div className={style.accordionContainer} >
      {
        courseDetailsData[pathName]?.heading.map((ele,ind)=>{
          return (
            
                <CourseAccordion key ={ind} data ={ele} />
          
          )
        })
      }
        </div>
      {
        courseDetailsData[pathName]?.isApply ? <FormDialog />:<></>
      }
      
    </div>
  }