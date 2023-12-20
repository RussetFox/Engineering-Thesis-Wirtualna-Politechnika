import React, { useState } from 'react';
import '../Styles/Comment-Section-Styling.css';
import SingleComment from './Single-Comment-Component';
import {Comment} from './Single-Comment-Component';


export interface CommentSectionProps {
    comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
    const pageSize = 2;
    const [visibleComments, setVisibleComments] = useState(()=>{return comments.slice(0, pageSize)});
    const [page, setPage] = useState(()=> {return 1});

    const loadMoreComments = () => {
        const nextPage = page + 1;
        const nextComments = comments.slice(0, pageSize * nextPage);
        setVisibleComments(nextComments);
        setPage(nextPage);
    }

    return (
        <div className='all-comments-for-post-frame'>
            {visibleComments.map((comment) => (
                <SingleComment key={comment.commentId} singleComment={comment}/>
            ))}
            {comments.length > visibleComments.length && (
                <button className="load-comments-button" onClick={loadMoreComments}>Załaduj więcej komentarzy</button>
            )}
        </div>
    );
}

export default CommentSection;
