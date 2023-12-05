import React from 'react';


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

    return (
    <div>
        <div>{postContents.description}</div>
    </div>

    )
};
export default SinglePostComponent