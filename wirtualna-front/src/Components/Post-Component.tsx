import React from 'react';
import moment from 'moment';
import '../Styles/Posts-Display-Styling.css';
import Hear from '../Resources/Icons/BlancPic.jpg'
export class PostContents {
    contentId: number;
    description: string;
    creationTime: Date;
    tags?: string[];
    author: string;

    constructor(
        contentId: number,
        description: string,
        creationTime: Date,
        tags: string[],
        author: string
    ) {
        this.contentId = contentId;
        this.description = description;
        this.creationTime = creationTime;
        this.tags = tags;
        this.author = author;
    }
}

export interface PostContentsProps {
    postContents: PostContents;
}

const SinglePostComponent: React.FC<PostContentsProps> = ({ postContents }) => {
    const displayTime: string = moment(postContents.creationTime).fromNow();
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
                <button>Delete</button>
            </div>
        </div>


    )
};
export default SinglePostComponent