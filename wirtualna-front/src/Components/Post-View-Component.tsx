import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";


export default function PostViewComponent() {
    //Handling Tag listing logic
    //Zarządzanie logiką wyświetlania postów po tagach
    const [tagForPosts, setTagForPosts] = useState(() => { return '' });
    useEffect(() => {
        console.log(tagForPosts);
    }, [tagForPosts])

    //Handling posting new content and listing it to existing posts
    //Zarządzanie logiką dodawania nowych postów i wyświetlaniu ich wraz z nowymi postami
    const [contentCreateText, setContentCreateText] = useState(()=> {return ''})
    useEffect(()=>{
        console.log(contentCreateText)
    },[contentCreateText])

    return (
        <div className="post-view-component">
            <SearchBar sendTag={setTagForPosts} />
            <CreatePost contentText={setContentCreateText}/>
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