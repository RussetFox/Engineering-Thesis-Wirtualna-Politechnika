import React from 'react';


class PostContents {
    contentId: number;
    description: string;
    creationTime: Date;
    tags: string[];
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

export default function CreatePostComponent() {
    return (
        <div className='test-post'>Test</div>
    )
}