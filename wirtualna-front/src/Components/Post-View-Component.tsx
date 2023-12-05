import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import PostFrame from "./Post-Frame";
import { PostFrameProps } from "./Post-Frame";
import CreatePost from "./Create-Post-Component";
import { postData } from "./Create-Post-Component"
import { PostContents} from "./Post-Component";
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
    const [contentPage, setContentPage] = useState(() => { return 1 })
    const [postContents, setPostContents] = useState<PostContents[]>(() => { return [] });
    useEffect(() => {
        if (contentData.description !== '') {
            postToBack(contentData)
                .then(() => {
                    setContentData({ title: '', description: '', tags: [] });
                })
                .then(() => getFromBack(1)
                    .then((data) => setPostContents(data)))
        }
    }, [contentData])

    useEffect(() => {
        getFromBack(contentPage)
            .then((data) => { if (data && Array.isArray(data)){setPostContents((prevData) => [...prevData, ...data]) }});
        console.log(contentPage);
    }, [contentPage])
    return (
        <div className="post-view-component">
            <SearchBar sendTag={setTagForPosts} />
            <CreatePost contentData={setContentData} />
            <button onClick={(e) => { setContentPage(prevPage => prevPage + 1) }}>Testowansko</button>
            <PostFrame posts={postContents} />
        </div>
    )
}