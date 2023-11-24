import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";


export default function PostViewComponent() {
    const [tagForPosts, setTagForPosts] = useState(() => { return '' });
    useEffect(() => {
        console.log(tagForPosts);
        console.log("Wysłane z wyższej klasy!!!!");
    }, [tagForPosts])

    return (
        <div className="post-view-component">
            <SearchBar sendTag={setTagForPosts} />
            <div className="Create-Post-Frame">
                <textarea className="Create-Post-Text-Area" placeholder="What's on your mind?"></textarea>
            </div>
            <div className="post-frame">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}