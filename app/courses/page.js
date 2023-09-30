
import CoursesDetails from "../component/utils/courseDetails";
import { courseData } from "../component/schedule/data";
import Heading from "../component/utils/Heading";


export default function Page() {
    console.log('vikas');
    let array = [0,1,2,3]
    return (<div>
        <Heading name='Courses' />
        
        {
            array.map((ele)=>(
                <CoursesDetails key={ele}
                    data = {courseData}
                    index = {ele}
                />
            ))
        }
    </div>
       
    )
}