import React, { useEffect, useState } from "react";

interface SearchBarProps {
    sendTag;
}


const SearchBar: React.FC<SearchBarProps> = ({ sendTag }) => {
    //Declaration of multiple useStates
    //Deklaracje wielu useState'ów
    const [searchBarPhrase, setSearchBarPhrase] = useState(() => { return '' });
    const [foundTags, setFoundTags] = useState(()=>{return []})
    const [showTags, setShowTags] = useState(()=>{return false})
    //Funciton returning tags from backend that shows them in a list
    const fetchPharses = async (TagPhrase:string) =>{
        try {
            const response = await fetch("http://localhost:8080/content/tag/repeated/"+TagPhrase, {method: 'GET'});
            const data = await response.json();
            console.log(data);
            setFoundTags(data);
            setShowTags(true);
        }
        catch{
            console.log("Error");
        }
    }
    //Function returning searched tag to parent component to render exact posts
    //Funkcja przekazująca odpowiednie tagi do funkcji rodzica po znalezieniu tagu
    useEffect(() => {
        if (searchBarPhrase !== '') {
            const delayDebounce = setTimeout(() => {
                console.log(searchBarPhrase)
                fetchPharses(searchBarPhrase);
            }, 800);
            return () => {
                clearTimeout(delayDebounce);
                setShowTags(false);
            }
        };
    }, [searchBarPhrase])





    return (
        <div className='search-bar-frame'>
            <input className='search-bar-textframe'
                placeholder="Wyszukaj tag"
                onChange={(e) => setSearchBarPhrase(e.target.value)}
            ></input>
            {showTags && foundTags.map((found, index)=>(
                <div key={index} className="tag-found-bar">{found}</div>
            ))}
            <button className='search-tag-button' onClick={(e) => sendTag(searchBarPhrase)}>test</button>
        </div>
    )
};
export default SearchBar;

// onChange={(e) => searchSetProps(e.target.value)}