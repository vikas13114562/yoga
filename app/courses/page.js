
import CoursesDetails from "../component/utils/courseDetails";
import { courseData } from "../component/schedule/data";
import Heading from "../component/utils/Heading";


export default function Page() {
    
    let array = [0,1,2,3,4,5]
    return (<div>
        <Heading name='Courses' />
        
        {
            array.map((ele)=>(
                <CoursesDetails key={ele}
                    data = {courseData}
                    index = {ele}
                    isBtnShow={true}
                />
            ))
        }
    </div>
       
    )
}