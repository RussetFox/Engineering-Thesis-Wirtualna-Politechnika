import React, { useState } from "react"
import Hear from '../Resources/Icons/BlancPic.jpg'
import UnLikedIcon from '../Resources/Icons/HeartIcon.png'
import LikedIcon from '../Resources/Icons/LikedHeart.png'

export interface SingleCommentProps {
    singleComment: Comment;
}

export interface Comment {
    commentId: number;
    commentText: string;
    author: string;
    likes: number;
}
async function handleLike(likeSet: React.Dispatch<React.SetStateAction<boolean>>,
    increaseLikes: React.Dispatch<React.SetStateAction<number>>, postId: number) {
    fetch('http://localhost:8080/content/comment/like/' + postId, {
        method: 'PUT',
        credentials: 'include'
    })
    increaseLikes(prev => prev + 1);
    likeSet(true);
}

async function handleUnlike(likeSet: React.Dispatch<React.SetStateAction<boolean>>,
    decreaseLikes: React.Dispatch<React.SetStateAction<number>>, postId: number) {
    fetch('http://localhost:8080/content/comment/dislike/' + postId, {
        method: 'PUT',
        credentials: 'include'
    })
    decreaseLikes(prev => prev - 1);
    likeSet(false);
}

const SingleCommentComponent: React.FC<SingleCommentProps> = ({ singleComment }) => {
    const [liked, setLiked] = useState(() => { return false });
    const [likeCount, setLikeCount] = useState(() => { return singleComment.likes });

    return (
        <div className='comment-frame'>
            <img className='comment-profile-picture' src={Hear} />
            <div className='comment-author-text-frame'>
                <div className='comment-author'>{singleComment.author}</div>
                <div className='comment-text'>{singleComment.commentText}</div>
                <div className='comment-like-container'>
                    {liked ? <img className='comment-like-button' src={LikedIcon} onClick={() => handleUnlike(setLiked, setLikeCount, singleComment.commentId)} alt='dislike' />
                        : <img className='comment-like-button' src={UnLikedIcon} onClick={() => handleLike(setLiked, setLikeCount, singleComment.commentId)} alt='like' />}
                    <text className='comment-like-counter'>{likeCount}</text>
                </div>
            </div>
        </div>
    )
};
export default SingleCommentComponent


