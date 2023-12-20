import React, { useEffect, useState } from 'react';
import '../Styles/Comment-Section-Styling.css';

async function handleCommentSubmit(commentFieldInput: string, postId: number) {
    const sendData = {
        commentText: commentFieldInput
    };
    fetch('http://localhost:8080/content/' + postId + '/comment', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
    })

}

export interface CreateCommentProps {
    postId: number;
}

const CreateComment: React.FC<CreateCommentProps> = ({ postId }) => {
    const [commentFieldInput, setCommentFieldInput] = useState(() => { return '' });
    const [submitComment, setSubmitComment] = useState(() => { return false });

    const handleCommentFieldChange = (e) => {
        setCommentFieldInput(e.target.value);
    }

    useEffect(() => {
        if (submitComment) {
            handleCommentSubmit(commentFieldInput, postId);
            setCommentFieldInput('');
            setSubmitComment(false);
        }
    }, [submitComment])

    return (
        <div className='comment-field-container'>
            <div className='comment-input-container'>
                <textarea className='comment-field' placeholder='Dodaj komentarz...' value={commentFieldInput} onChange={handleCommentFieldChange} />
            </div>
            <button className='comment-submit-button' onChange={handleCommentFieldChange} onClick={() => setSubmitComment(true)}>Opublikuj</button>
        </div>
    );
};
export default CreateComment