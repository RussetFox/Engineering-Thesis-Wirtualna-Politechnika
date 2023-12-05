import { PostContents } from "./Post-Component"
import SinglePost from "./Post-Component"

export interface PostFrameProps {
    posts: PostContents[];
}



const PostFrame: React.FC<PostFrameProps> = ({ posts }) => {

    return (<div className="post-frame">
        {
            posts?.length > 0 && posts.map((post, index) => (
                <SinglePost key={index} postContents={post} />
            ))
        }
    </div>

    )
}
export default PostFrame;