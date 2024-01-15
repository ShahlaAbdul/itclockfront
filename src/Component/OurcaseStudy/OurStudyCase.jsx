import React, { useContext, useEffect, useState } from 'react'
import "./ourStudyCase.scss"
import { SearchContext } from '../../useContext/SearchContext';

function OurStudyCase() {
    const [fetchData, setFetchData] = useState([])
    const { searchData, handleSearch } = useContext(SearchContext);
    const [sortedProperty, setSortedProperty] = useState("")
    useEffect(() => {
        getFetch()
    }, [])

    function getFetch() {
        fetch("http://localhost:5100/")
            .then((res) => res.json())
            .then((data) => setFetchData(data))
    }

    return (
        <section id='ourstudy'>
            <div className='ourstudy'>
                <div className='ourstudy_head'>
                    <span>OUR CASE STUDY</span>
                    <h1>We work with global brands</h1>
                    <input className='search' type="text" placeholder='search by name'onChange={(e)=>handleSearch(e)} />
                    <button onClick={() => setSortedProperty({ property: "name", asc: true })}>Z-a</button>
                    <button onClick={() => setSortedProperty({ property: "name", asc: false })}>A-z</button>
                    <button onClick={() => setSortedProperty()}>default</button>
                </div>
                <div className="ourstudy_cards">
                    {fetchData
                        .filter((x) => x.name.toLowerCase().includes(searchData.toLowerCase()))
                        .sort((a, b) => {
                            if (sortedProperty && sortedProperty.asc) {
                                return a[sortedProperty.property] > b[sortedProperty.property]
                                    ? 1
                                    : b[sortedProperty.property] > a[sortedProperty.property]
                                        ? -1
                                        : 0;
                            } else if (sortedProperty && sortedProperty.asc === false) {
                                return a[sortedProperty.property] < b[sortedProperty.property]
                                    ? 1
                                    : b[sortedProperty.property] < a[sortedProperty.property]
                                        ?
                                        -1
                                        : 0
                            } else {
                                return 0
                            }

                        })


                        .map((x) => (
                            <ul className="ourstudy_card" key={x._id}>
                                <img src={x.image} alt="" />
                                <li className='card_name'>{x.name}</li>
                                <li>{x.author}</li>
                                <i className="fa-regular fa-heart"></i>
                            </ul>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default OurStudyCase