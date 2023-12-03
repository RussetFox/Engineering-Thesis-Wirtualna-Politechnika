import '../Styles/Create-Post-Component.css';
import React, { SetStateAction } from 'react';
import { useState } from 'react';

interface postData {
    title: string;
    description: string;
    tags: string[];
}

function findHashtagWords(inputStr: string): string[] {
    const regex = /(?<=#)[a-zA-Z0-9_ąćęłńóśżź]+/g;

    const matchedWords = inputStr.match(regex);
    if (!matchedWords) return [];
    return matchedWords;
}

interface CreatePostProps {
    contentData: React.Dispatch<SetStateAction<postData>>;
}

const CreatePostComponent: React.FC<CreatePostProps> = ({ contentData }) => {
    const [inputValue, setInputValue] = useState(() => { return '' })
    const [isButtonActive, setIsButtonActive] = useState(() => { return false })

    const handleInputChange = (e) => {
        const inputFieldValue = e.target.value;
        setInputValue(inputFieldValue);
        setIsButtonActive(inputFieldValue.length >= 50);
    }

    function handlePostSubmit() {
        if (inputValue !== '') {
            const pData: postData = {
                title: '',
                description: inputValue,
                tags: findHashtagWords(inputValue)
            };
            contentData(pData);
        }
        setIsButtonActive(false);
        setInputValue('');
    }


    return (
        <div className="create-post-frame">
            <textarea
                className="create-post-text-area"
                placeholder="O czym chcesz napisać?"
                value={inputValue}
                onChange={handleInputChange}></textarea>
            <div className='create-post-button-frame'>
                <button className="create-post-submit-button"
                    disabled={!isButtonActive} onClick={handlePostSubmit}>Opublikuj</button>
            </div>
        </div>
    )
};
export default CreatePostComponent