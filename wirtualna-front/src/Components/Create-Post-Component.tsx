import '../Styles/Create-Post-Component.css';
import React from 'react';
import { useState } from 'react';

interface CreatePostProps{
    contentText:React.Dispatch<React.SetStateAction<string>>;
}

const CreatePostComponent:React.FC<CreatePostProps> = ({contentText})=>{
    const [postInput, setPostInput] = useState(() => { return '' })
    const [inputValue, setInputValue] = useState(() => { return '' })
    const [isButtonActive, setIsButtonActive] = useState(() => { return false })

    const handleInputChange = (e) =>{
        const inputFieldValue = e.target.value;
        setInputValue(inputFieldValue);
        setIsButtonActive(inputFieldValue.length>=50);
    }


    return (
        <div className="create-post-frame">
            <input
                className="create-post-text-area"
                placeholder="What's on your mind?"
                value={inputValue}
                onChange={handleInputChange}></input>
            <button disabled={!isButtonActive} onClick={(e) => setInputValue('')}>testButton</button>
        </div>
    )
};
export default CreatePostComponent