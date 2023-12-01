import { useEffect, useState } from "react";
import '../Styles/Post-View-Component.css'
import '../Styles/Create-Post-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";

function findHashtagWords(inputStr: string): string[] {
    const regex = /(?<=#)[a-zA-Z0-9_ąćęłńóśżź]+/g;

    const matchedWords = inputStr.match(regex);
    if (!matchedWords) return [];
    return matchedWords;
}

interface postData {
    title: string;
    description: string;
    tags: string[];
}

async function postToBack(data: postData) {
    const response = await fetch('http://localhost:8080/content', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // Or handle the response as needed
}

export default function PostViewComponent() {


    //Handling Tag listing logic
    //Zarządzanie logiką wyświetlania postów po tagach
    const [tagForPosts, setTagForPosts] = useState(() => { return '' });
    useEffect(() => {
    }, [tagForPosts])

    //Handling posting new content and listing it to existing posts
    //Zarządzanie logiką dodawania nowych postów i wyświetlaniu ich wraz z nowymi postami
    const [contentCreateText, setContentCreateText] = useState(() => { return '' })

    useEffect(() => {
        if (contentCreateText !== '') {
            const pData: postData = {
                title: '',
                description: contentCreateText,
                tags: findHashtagWords(contentCreateText)
            };
            postToBack(pData);
            setContentCreateText('');
        }
    }, [contentCreateText])


    return (
        <div className="post-view-component">
            <SearchBar sendTag={setTagForPosts} />
            <CreatePost contentText={setContentCreateText} />
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