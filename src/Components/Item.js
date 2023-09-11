import React from 'react'


const Item = ({beer}) => {
  return (
    <div className='beer-card'>
        <img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>Volume : {beer.volume.value} {beer.volume.unit}</p>
    </div>
  )
}

export default Item