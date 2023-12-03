import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";


//Posting content to backend

interface postData {
    title: string;
    description: string;
    tags: string[];
}

async function postToBack(data: postData) {
    const response = await fetch('http://localhost:8080/content', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}


//Getting content from backend

// async function getFromBack(data)


//_____________Post view component logic_______________________________

export default function PostViewComponent() {


    //Handling Tag listing logic
    //Zarządzanie logiką wyświetlania postów po tagach
    const [tagForPosts, setTagForPosts] = useState(() => { return '' });
    useEffect(() => {
    }, [tagForPosts])

    //Handling posting new content and listing it to existing posts
    //Zarządzanie logiką dodawania nowych postów i wyświetlaniu ich wraz z nowymi postami
    const [contentData, setContentData] = useState<postData>(() => { return { title: '', description: '', tags: [] } })

    useEffect(() => {
        if (contentData.description !== '') {
            postToBack(contentData);
            setContentData({ title: '', description: '', tags: [] });
        }
    }, [contentData])


    return (
        <div className="post-view-component">
            <SearchBar sendTag={setTagForPosts} />
            <CreatePost contentData={setContentData} />
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