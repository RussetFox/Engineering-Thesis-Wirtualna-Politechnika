import React, {useEffect} from "react";

interface SearchBarProps {
    searchProps: string;
    searchSetProps;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchProps, searchSetProps }) => {

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            console.log(searchProps)
        }, 800);
        return () => clearTimeout(delayDebounce)
    }, [searchProps])


    return (
        <div className='search-bar-frame'>
            <input className='search-bar-textframe'
                placeholder="Wyszukaj tag"
                onChange={(e) => searchSetProps(e.target.value)}
            ></input>
        </div>
    )
};
export default SearchBar;