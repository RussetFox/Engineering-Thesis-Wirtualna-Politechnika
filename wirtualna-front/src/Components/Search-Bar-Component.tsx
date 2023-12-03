import React, { useEffect, useState } from "react";

import '../Styles/Search-Bar.css'
import SearchIcon from "../Resources/Icons/SearchIcon.png"


interface SearchBarProps {
    sendTag;
}

const SearchBar: React.FC<SearchBarProps> = ({ sendTag }) => {
    //Declaration of multiple useStates
    //Deklaracje wielu useState'ów
    const [searchBarPhrase, setSearchBarPhrase] = useState(() => { return '' });
    const [foundTags, setFoundTags] = useState(() => { return [] })
    const [showTags, setShowTags] = useState(() => { return false })

    //Funciton returning tags from backend that shows them in a list
    //Funkcja zwracająca tagi wczytane z backendu, pokazująca je w liście
    const fetchPharses = async (TagPhrase: string) => {
        if (TagPhrase[0] === '#') TagPhrase = TagPhrase.substring(1);
        try {
            const response = await fetch("http://localhost:8080/content/tag/repeated/" + TagPhrase,
                {
                    method: 'GET',
                    credentials: 'include'
                });
            const data = await response.json();
            setFoundTags(data);
            setShowTags(true);
        }
        catch {
            console.log("Error");
        }
    }

    //UseEffect checking if input field has been changed and if field isn't empty or contains only # calls search tags function
    //UseEffect odpowiedzialny za sprawdzenie, czy pole input zostało zmienione i jeżeli nie jest puste lub nie zawiera tylko znaku # używa funkcji znajdującej tagi
    useEffect(() => {
        if (searchBarPhrase !== '' && searchBarPhrase !== '#') {
            const delayDebounce = setTimeout(() => {
                fetchPharses(searchBarPhrase);
            }, 800);
            return () => {
                clearTimeout(delayDebounce);
                setShowTags(false);
            }
        };
    }, [searchBarPhrase])


    //Function returning searched tag to parent component to render exact posts
    //Funkcja przekazująca odpowiednie tagi do funkcji rodzica po znalezieniu tagu
    function sendTagToParent(tagSent: string) {
        if (tagSent[0] === '#') tagSent = tagSent.substring(1);
        sendTag(tagSent);
        setSearchBarPhrase('');
        setShowTags(false);
    }


    return (
        <div className='search-bar-frame'>
            <div className="bar-and-button">
                <input id="search-fram" className='search-bar-textframe'
                    placeholder="Wyszukaj tag"
                    onChange={(e) => setSearchBarPhrase(e.target.value)}
                    value={searchBarPhrase}
                ></input>
                <img src={SearchIcon} alt="search" className='search-tag-button' onClick={(e) => sendTagToParent(searchBarPhrase)} />
            </div>

            {/*Lists all tags found in BackEnd as separate divs which send data to parent after clicking
Listuje wszystkie znalezione tagi, po czym wysyła je do rodzica po kliknięciu na jeden z nich*/}

            {showTags && foundTags.map((found, index) => (
                <div key={index} className="tag-found-bar" onClick={(e) => sendTagToParent(found)}>{found}</div>
            ))}
        </div>
    )
};
export default SearchBar;
