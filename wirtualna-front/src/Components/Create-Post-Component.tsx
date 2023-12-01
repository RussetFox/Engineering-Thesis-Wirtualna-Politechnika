import '../Styles/Create-Post-Component.css';
import React from 'react';
import { useState } from 'react';

interface CreatePostProps {
    contentText: React.Dispatch<React.SetStateAction<string>>;
}

const CreatePostComponent: React.FC<CreatePostProps> = ({ contentText }) => {
    const [inputValue, setInputValue] = useState(() => { return '' })
    const [isButtonActive, setIsButtonActive] = useState(() => { return false })

    const handleInputChange = (e) => {
        const inputFieldValue = e.target.value;
        setInputValue(inputFieldValue);
        setIsButtonActive(inputFieldValue.length >= 50);
    }

    function handlePostSubmit() {
        contentText(inputValue);
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