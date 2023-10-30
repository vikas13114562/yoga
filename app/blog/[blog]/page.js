import { blogData } from "@/app/component/all-data/AllData";
import BlogPost from "@/app/component/blog/BlogPost";

export default function Page({ params }) {
    const pathName = params.blog
   

    return(
        <BlogPost data = {blogData[pathName]} />
    )

}