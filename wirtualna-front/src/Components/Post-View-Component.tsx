import React from "react";
import '../Styles/Post-View-Component.css'
import SearchBar from "./Search-Bar-Component";
import Post from "./Post-Component";
import CreatePost from "./Create-Post-Component";

export default function PostViewComponent(){
    return(
        <div className="post-view-component">
            <SearchBar/>
            <CreatePost/>
            <div className="post-frame">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}