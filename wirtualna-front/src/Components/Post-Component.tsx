import React, { useState } from 'react';
import moment from 'moment';
import '../Styles/Posts-Display-Styling.css';
import Hear from '../Resources/Icons/BlancPic.jpg'
import UnLikedIcon from '../Resources/Icons/HeartIcon.png'
import LikedIcon from '../Resources/Icons/LikedHeart.png'
import DeleteIcon from '../Resources/Icons/Trash-Icon.png'

async function handleLike(likeSet: React.Dispatch<React.SetStateAction<boolean>>, 
    increaseLikes:React.Dispatch<React.SetStateAction<number>>, postId: number) {
    fetch('http://localhost:8080/content/like/' + postId, {
        method: 'PUT',
        credentials: 'include'
    })
    increaseLikes(prev => prev + 1);
    likeSet(true);
}

async function handleUnlike(likeSet: React.Dispatch<React.SetStateAction<boolean>>, 
    decreaseLikes:React.Dispatch<React.SetStateAction<number>>, postId: number) {
    fetch('http://localhost:8080/content/dislike/' + postId, {
        method: 'PUT',
        credentials: 'include'
    })
    decreaseLikes(prev => prev - 1);
    likeSet(false);
}


export class PostContents {
    contentId: number;
    description: string;
    creationTime: Date;
    tags?: string[];
    author: string;
    likes: number;

    constructor(
        contentId: number,
        description: string,
        creationTime: Date,
        tags: string[],
        author: string,
        likes: number
    ) {
        this.contentId = contentId;
        this.description = description;
        this.creationTime = creationTime;
        this.tags = tags;
        this.author = author;
        this.likes = likes;
    }
}

export interface PostContentsProps {
    postContents: PostContents;
    onDelete: (contentId: number) => void;
}

const SinglePostComponent: React.FC<PostContentsProps> = ({ postContents, onDelete }) => {
    const displayTime: string = moment(postContents.creationTime).fromNow();
    const [liked, setLiked] = useState(() => { return false });
    const [likeCount, setLikeCount] = useState(() => { return postContents.likes });
    return (
        <div className='single-post-container'>
            <div className='author-image-container'>
                <div className='author-image'>
                    <img src={Hear} alt='Author' />
                </div>
                <div className='author-name'>{postContents.author}</div>
            </div>
            <div className='post-content-container'>
                <div className='passed-date'>{displayTime}</div>
                <div className='post-description'>{postContents.description}</div>
            </div>
            <div className='content-buttons-container'>
                <img className='delete-button' src={DeleteIcon} onClick={() => onDelete(postContents.contentId)} />
                <div className='like-container'>
                    {liked ? <img className='like-button' src={LikedIcon} onClick={() => handleUnlike(setLiked,setLikeCount, postContents.contentId)} />
                        : <img className='like-button' src={UnLikedIcon} onClick={() => handleLike(setLiked, setLikeCount, postContents.contentId)} />}
                    <text className='like-counter'>{likeCount}</text>
                </div>
            </div>
        </div>


    )
};
export default SinglePostComponent