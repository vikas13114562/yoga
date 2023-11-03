
import style from '../../component/utils/Course.module.css'
import styles from '../../component/All.module.css'
import CourseAccordion from '@/app/component/utils/CourseAccordion'
import {courseData, courseDetailsData} from '../../component/schedule/data'
import Border from '@/app/component/utils/Border'
import FormDialog from '@/app/component/utils/FormDiolog'
import CoursesDetails from '@/app/component/utils/courseDetails'

export default function Page({ params }) {
    const pathName = params.id

    let indexArr = {
      "yin-yoga":0,
      "prenatal-yoga":1,
      "ashtanga-yoga":2,
      "hatha-yoga":3,
      "nutrition":4,
      "yog-anatomy-yoga":5,
    }
   
    return <div className={style.mainContainer}>
      <div className={styles.mainHeading}>{courseDetailsData[pathName]?.mainHeading ?? "Course"}</div>
      {/* <Border /> */}
      <CoursesDetails
        isBtnShow={false}
        index = {indexArr[pathName]}
        data = {courseData}
      />
      <div className={style.accordionContainer} >
      {
        courseDetailsData[pathName]?.heading.map((ele,ind)=>{
          return (
            
                <CourseAccordion key ={ind} data ={ele} />
          
          )
        })
      }
        </div>
        <div style={{marginLeft:'8%'}}>
      {
        courseDetailsData[pathName]?.isApply ? <FormDialog text='Join Us Today' variant='text' />:<></>
      }</div>
      
    </div>
  }