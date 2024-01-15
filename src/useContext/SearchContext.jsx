import React, { createContext, useState } from 'react'

export const SearchContext = createContext()



function SearchProvider({ children }) {
    const [searchData, setSearchData] = useState("")

    function handleSearch(e) {
        setSearchData(e.target.value)
    }
    
    return (
        <SearchContext.Provider value={{ searchData, handleSearch }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider