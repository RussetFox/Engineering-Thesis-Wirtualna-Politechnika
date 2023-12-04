import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";
import { postData } from "./Create-Post-Component"
import { PostContentsProps } from "./Post-Component"
//Posting content to backend

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


async function getFromBack(pageNumber: number) {
    try {
        const response = await fetch('http://localhost:8080/content/page/' + pageNumber, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json();
        return data;
    }
    catch {
        throw new Error("Nie udało się pobrać postów");
    }
}
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
    const [contentData, setContentData] = useState<postData>(() => { return { title: '', description: '', tags: [] } });
    const [newPostSubmitted, setNewPostSubmitted] = useState(() => { return false });
    const [contentPage, setContentPage] = useState(() => { return 1 })
    const [postContents, setPostContents] = useState<PostContentsProps[]>(() => { return [] });
    useEffect(() => {
        if (contentData.description !== '') {
            postToBack(contentData)
                .then(() => {
                    setContentData({ title: '', description: '', tags: [] });
                    setNewPostSubmitted(true);
                })
        }
    }, [contentData])
    useEffect(() => {
        if (newPostSubmitted) {
            getFromBack(1);
            setNewPostSubmitted(false);
        }
    }, [newPostSubmitted])

    useEffect(() => {
        getFromBack(contentPage)
        .then((data)=>setPostContents(data));
        console.log(postContents);
    },[contentPage])
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