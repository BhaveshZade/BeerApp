import React, {useState, useEffect} from 'react'
import Item from './Item';

const ListItem = () => {
    const [beers, setBeers] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        getBeers()
    }, [])

    let getBeers = async () => {
        let response = await fetch(`https://api.punkapi.com/v2/beers`)
        let data = await response.json()
        console.log("data : ", data)
        setBeers(data)
    }

    let filteredBeers = beers.filter((beer) => 
        beer.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
     <div className='container'>
        <hr />
        <input type="text" placeholder = "Search Beer" onChange={(e) => setSearch(e.target.value)}/>
        <div className='beer-list'>
            {filteredBeers.map((beer) => (
                <Item key = {beer.id} beer = {beer} />
            ))}
        </div>
     </div>
  )
}   

export default ListItem