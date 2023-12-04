import { PostContentsProps} from "./Post-Component"
import {PostContents} from "./Post-Component"

export interface PostFrameProps{
    posts:PostContents[];
}


export default function PostFrame({posts} : PostFrameProps){
    return(
        <div>Test</div>
    )
}