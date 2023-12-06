import { PostContents } from "./Post-Component"
import SinglePost from "./Post-Component"
import '../Styles/Posts-Display-Styling.css'

export interface PostFrameProps {
    posts: PostContents[];
    onDelete: (contentIdToDelete: number) => void;
}



const PostFrame: React.FC<PostFrameProps> = ({ posts, onDelete }) => {

    return (<div className="post-frame">
        {
            posts?.length > 0 && posts.map((post, index) => (
                <SinglePost key={index} postContents={post} onDelete={onDelete}/>
            ))
        }
    </div>

    )
}
export default PostFrame;