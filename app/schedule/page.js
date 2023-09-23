import CoursesDetails from "../component/utils/courseDetails";
import { courseData } from "../component/schedule/data";
import Schedule from "../component/schedule/Schedule";
import Heading from "../component/utils/Heading";
import Border from "../component/utils/Border";

export default function Page() {
    
    return (<div>
        <Heading name={'Class Schedule'} />
        <Border />
        <Schedule />
    </div>
       
    )
}