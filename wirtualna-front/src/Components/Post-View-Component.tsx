import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import PostFrame from "./Post-Frame";
import CreatePost from "./Create-Post-Component";
import { postData } from "./Create-Post-Component"
import { PostContents } from "./Post-Component";
import { wait } from "@testing-library/user-event/dist/utils";
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

//Getting content from backend by tag

async function getFromBackByTag(tag: string) {
    try {
        const response = await fetch('http://localhost:8080/content/tag/' + tag, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await response.json();
        return data;
    }
    catch {
        throw new Error("Nie udało się pobrać postów po danym tagu");
    }

}
// Deleting content from backend
async function deleteFromBack(contentId: number) {
    try {
        const response = await fetch('http://localhost:8080/content/' + contentId, {
            method: 'DELETE',
            credentials: 'include'
        })
        if (response.ok) alert("Usunięto post poprawnie");
        else if (response.status === 404) alert("Nie znaleziono id posta, nie można go usunąć");
        else alert("Nie udało się usunąć posta");
    }
    catch (error) {

        alert("Nie udało się usunąć posta");
    }
}

//Fetching number of pages from backend
async function getNumberOfPages(setPages: React.Dispatch<React.SetStateAction<number | undefined>>) {
    try {
        const response = await fetch('http://localhost:8080/content/numberOfPages', {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPages(parseInt(data));

    } catch {
        throw new Error("Nie udało się pobrać liczby stron");
    }
}

//_____________Post view component logic_______________________________

export default function PostViewComponent() {

    const [numberOfPages, setNumberOfPages] = useState<number | undefined>(undefined);
    getNumberOfPages(setNumberOfPages);

    //Handling Tag listing logic
    //Zarządzanie logiką wyświetlania postów po tagach
    const [tagForPosts, setTagForPosts] = useState(() => { return '' });
    useEffect(() => {
        if (tagForPosts !== '')
            getFromBackByTag(tagForPosts)
                .then((data) => setPostContents(data));
    }, [tagForPosts])

    //Handling posting new content and listing it to existing posts
    //Zarządzanie logiką dodawania nowych postów i wyświetlaniu ich wraz z nowymi postami
    const [contentData, setContentData] = useState<postData>(() => { return { title: '', description: '', tags: [] } });
    const [contentPage, setContentPage] = useState(() => { return 1 })
    const [postContents, setPostContents] = useState<PostContents[]>(() => { return [] });
    const [scrollEnabled, setScrollEnabled] = useState(() => { return true });

    const handleScroll = (e) => {
        
        const bottom = e.target.scrollHeight - e.target.scrollTop - 50 < e.target.clientHeight;
        if (bottom && numberOfPages !== undefined && contentPage < numberOfPages && scrollEnabled) {
            setContentPage(prevContentPage => prevContentPage + 1);
            console.log(contentPage);

        }
    };

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

    const deletePost = (contentIdToDelete: number) => {
        const updatedPosts = postContents.filter((post) => post.contentId !== contentIdToDelete);
        deleteFromBack(contentIdToDelete);
        setPostContents(updatedPosts);
    }

    useEffect(() => {
        setScrollEnabled(false);
        getFromBack(contentPage)
            .then((data) => {
                if (Array.isArray(data)) {
                    setPostContents((prevData) => {
                        if (Array.isArray(prevData))
                            return [...prevData, ...data];
                        else return [...data];
                    });
                }
            })
            .then(() => setScrollEnabled(true));
    }, [contentPage]);

    return (
        <div className="post-view-component" onScroll={(e) => { handleScroll(e) }}>
            <SearchBar sendTag={setTagForPosts} />
            <CreatePost contentData={setContentData} />
            <PostFrame posts={postContents} onDelete={deletePost} />
        </div>
    )
}